import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #22254b;
  --secondary-color: #373b69;
}
`

const MovieAppBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
  font-family: 'Poppins', sans-serif;
  background-color: var(--primary-color);
  margin: 0;
  height: 100vh;
`

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: var(--secondary-color);
`

const SearchTerm = styled.input`
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-family: inherit;
  padding: 0.5rem 1rem;
  color: #fff;

  &::placeholder {
    color: #7378c5;
  }

  &:focus {
    outline: none;
    background-color: var(--primary-color);
  }
`

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const MovieContainer = styled.div`
  width: 300px;
  margin: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
`

const MovieImage = styled.img`
  width: 100%;
`

const MovieInfo = styled.div`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
`

const MovieTitle = styled.h3`
  margin-top: 0;
`

const MovieScore = styled.span`
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
`

const MovieOverview = styled.div`
  background-color: #fff;
  padding: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  transform: translateY(101%);
  overflow-y: auto;
  transition: transform 0.3s ease-in;

  ${MovieContainer}:hover & {
    transform: translateY(0);
  }
`

interface MovieItem {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieApiData {
  page: number
  results: MovieItem[]
  total_pages: number
  total_results: number
}

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

export default function MovieApp() {
  const [movieList, setMovieList] = useState<MovieItem[]>([])
  const [keyword, setKeyword] = useState<string>('')
  let flag = true

  const getClassByRate = (vote_average: number) => {
    if (vote_average >= 8) {
      return 'green'
    }
    if (vote_average >= 5) {
      return 'orange'
    }
    return 'red'
  }

  const getMovies = async (url: string) => {
    const res = await fetch(url)
    const data: MovieApiData = await res.json()
    console.log(data)
    setMovieList(data.results)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (keyword.trim() !== '') {
      getMovies(SEARCH_API + keyword.trim())
      setKeyword('')
    } else {
      console.log('将要刷新了~~')
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
  }

  useEffect(() => {
    if (flag) {
      getMovies(API_URL)
    }
    return () => {
      flag = false
    }
  }, [])

  return (
    <MovieAppBody>
      <GlobalStyle />
      <Header>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <SearchTerm
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setKeyword(e.target.value)
            }
          />
        </form>
      </Header>
      <Main>
        {movieList.length > 0 &&
          movieList.map(movieItem => {
            return (
              <MovieContainer key={movieItem.id}>
                <MovieImage
                  src={IMG_PATH + movieItem.poster_path}
                  alt={movieItem.title}
                />
                <MovieInfo>
                  <MovieTitle>{movieItem.title}</MovieTitle>
                  <MovieScore
                    style={{ color: getClassByRate(movieItem.vote_average) }}
                  >
                    {movieItem.vote_average}
                  </MovieScore>
                </MovieInfo>
                <MovieOverview>
                  <MovieTitle>Overview</MovieTitle>
                  {movieItem.overview}
                </MovieOverview>
              </MovieContainer>
            )
          })}
      </Main>
    </MovieAppBody>
  )
}
