## styled-components中引入本地图片

```js
import myImage from './images/my-image.png';

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${myImage});
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

<StyledImg src={myImage} alt="My Image" />

```

## 子绝父相

```js
const SplitLandingPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
`

const Split = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-image: url(${props => props.title});
  transition: all var(--speed) ease-in-out;
`
```

## 定义全局样式(包括媒体查询)

```js
const GlobalStyle = createGlobalStyle`
  :root {
    --left-bg-color: rgba(87, 84, 236, 0.7);
    --right-bg-color: rgba(43, 43, 43, 0.8);
    --left-btn-hover-color: rgba(87, 84, 236, 1);
    --right-btn-hover-color: rgba(28, 122, 28, 1);
    --hover-width: 75%;
    --other-width: 25%;
    --speed: 1000ms;
  }

  @media(max-width: 800px){
    h1 {
        font-size: 2rem;
        top: 30%;
    }

    a {
        padding: 1.2rem;
        width: 12rem;
    }
  }
`

<SplitLandingPageBody>
    <GlobalStyle />
    <SplitLandingPageContainer >
      //···
	</SplitLandingPageContainer>
</SplitLandingPageBody>
```

## ampersand选择器

```css
  &::before { //生成伪元素，节点位置是当前元素的第一个子元素节点
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--right-bg-color);
  }

  .hover-left & { //父元素带有某个样式的当前元素
    width: var(--other-width);
  }

  .hover-right & { //父元素带有某个样式的当前元素
    width: var(--hover-width);
  }

  &:hover { //当前元素被hover时
    background-color: var(--left-btn-hover-color);
    border-color: var(--left-btn-hover-color);
  }
```

## 使用枚举类型和ref

```js
enum Direction {
  Left = 'left',
  Right = 'right',
}


      const containerRef = useRef<HTMLDivElement | null>(null)

      const handleMouseEnter = (flag: Direction) => {
        if (flag == Direction.Left) {
          containerRef.current?.classList.add('hover-left')
        }
        if (flag == Direction.Right) {
          containerRef.current?.classList.add('hover-right')
        }
      }

      const handleMouseLeave = (flag: Direction) => {
        if (flag == Direction.Left) {
          containerRef.current?.classList.remove('hover-left')
        }
        if (flag == Direction.Right) {
          containerRef.current?.classList.remove('hover-right')
        }
      }
```

## 子绝父相居中

```js
const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%); // 元素距离父元素50%,再折返自身宽度的50%
  white-space: nowrap; //不换行
`
```

## 媒体查询

```js
  @media(max-width: 800px){ //当窗口的最大宽度小于800px时，更换媒体查询中所有样式
    h1 {
        font-size: 2rem;
        top: 30%;
    }

    a {
        padding: 1.2rem;
        width: 12rem;
    }
  }
```

