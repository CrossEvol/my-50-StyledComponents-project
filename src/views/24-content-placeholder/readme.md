## 动画帧

```css
  @keyframes bgPos {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;
    }
  }
```



这段CSS代码定义了一个名为"bgPos"的动画关键帧（@keyframes）。该动画关键帧定义了两个关键帧，分别是0%和100%。

在第一个关键帧中（0%），背景图像（background-image）的位置（background-position）被设置为"50% 0"。这意味着背景图像的水平位置位于容器的中心，垂直位置位于容器的顶部。

在第二个关键帧中（100%），背景图像的位置被设置为"-150% 0"。这意味着背景图像的水平位置已经偏移了超过容器的宽度，即图像已经完全移出了容器的左侧。这将导致背景图像在动画中水平向左移动，直到完全离开容器。

通过在CSS中定义这个动画关键帧，并将其应用于一个元素，可以创建一个平滑的背景图像移动效果，类似于背景图像在容器内水平滚动的效果。

## globalStyle定义全局样式

```css
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
```

## styled-components组件中使用标签选择器

```css
const CardHeader = styled.div`
  height: 200px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
```



## 加载效果

```tsx
const [loading, setLoading] = useState(true)

useEffect(() => {
    const initAuthorData = async () => {
	  // ...
      setLoading(false)
    }

    timeoutId = setTimeout(() => {
      initAuthorData()
    }, 2500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

// ...
<CardTitle className={loading ? 'animated-bg animated-bg-text' : ' '}/>
```

这样做的好处是能够定义每一个地方的加载效果设置

缺点是写起来非常麻烦。最好的loading效果还是弄个遮罩层。像案例中这种写法很难实现获取数据和终结加载效果衔接得很好。最好还是后方组件加载好了，然后遮罩层消失比较好。

## 渐变生成的无限灰条移动的动画效果

```css
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
```

