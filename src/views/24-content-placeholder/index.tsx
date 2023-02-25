import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  @keyframes bgPos {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;
    }
  }

  .animated-bg {
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 10%,
        #f6f7f8 20%,
        #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
  }

  .animated-bg-text {
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    height: 10px;
    width: 100%;
  }

  img {
    max-width: 100%;
  }
`

const ContentPlaceholderBody = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Card = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
`

const CardHeader = styled.div`
  height: 200px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

const CardContent = styled.div`
  background-color: #fff;
  padding: 30px;
`

const CardTitle = styled.h3`
  height: 20px;
  margin: 0;
`

const CardExcerpt = styled.p`
  color: #777;
  margin: 10px 0 20px;
`

const Author = styled.div`
  display: flex;
`

const ProfileImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100px;

  small {
    color: #aaa;
    margin-top: 5px;
  }
`

interface AuthorData {
  headerImg: string
  title: string
  excerpt: string
  profileImg: string
  authorName: string
  publishDate: string
}

export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true)
  const [authorData, setAuthorData] = useState<AuthorData>()
  let timeoutId: NodeJS.Timeout

  useEffect(() => {
    const initAuthorData = async () => {
      setAuthorData({
        headerImg:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
        title: 'Lorem ipsum dolor sit amet',
        excerpt:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
        profileImg: 'https://randomuser.me/api/portraits/men/45.jpg',
        authorName: 'John Doe',
        publishDate: 'Oct 08, 2020',
      })
      setLoading(false)
    }

    timeoutId = setTimeout(() => {
      initAuthorData()
    }, 2500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <ContentPlaceholderBody>
      <GlobalStyle />
      <Card>
        <CardHeader className={loading ? 'animated-bg' : ' '}>
          {authorData?.headerImg ? (
            <img src={authorData.headerImg} alt=" /" />
          ) : (
            <>&nbsp;</>
          )}
        </CardHeader>
        <CardContent>
          <CardTitle className={loading ? 'animated-bg animated-bg-text' : ' '}>
            {authorData?.title ? authorData.title : <> &nbsp;</>}
          </CardTitle>
          <CardExcerpt>
            {authorData?.excerpt ? (
              authorData?.excerpt
            ) : (
              <>
                <span
                  className={loading ? 'animated-bg animated-bg-text' : ' '}
                >
                  &nbsp;
                </span>
                <span
                  className={loading ? 'animated-bg animated-bg-text' : ' '}
                >
                  &nbsp;
                </span>
                <span
                  className={loading ? 'animated-bg animated-bg-text' : ' '}
                >
                  &nbsp;
                </span>
              </>
            )}
          </CardExcerpt>
          <Author>
            <ProfileImg className={loading ? 'animated-bg' : ' '}>
              {authorData?.profileImg ? (
                <img src={authorData.profileImg} alt=" /" />
              ) : (
                <>&nbsp;</>
              )}
            </ProfileImg>
            <AuthorInfo>
              <strong
                className={loading ? 'animated-bg animated-bg-text' : ' '}
              >
                {authorData?.authorName ? authorData.authorName : <>&nbsp;</>}
              </strong>
              <small className={loading ? 'animated-bg animated-bg-text' : ' '}>
                {authorData?.publishDate ? authorData.publishDate : <>&nbsp;</>}
              </small>
            </AuthorInfo>
          </Author>
        </CardContent>
      </Card>
    </ContentPlaceholderBody>
  )
}
