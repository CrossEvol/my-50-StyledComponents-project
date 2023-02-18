## 声明动画

```jsx
const GlobalStyle = createGlobalStyle`

  @keyframes scale {
    to {
        transform: translate(-50%,-50%) scale(3);
        opacity: 0;
    }
  }
`
const Circle = styled.span`
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%, scale(0));
  animation: scale 0.5s ease-out;
`
```

## 计算圆心相对于父元素的位置

```jsx
    setCircleX(e.pageX - e.currentTarget.offsetLeft)
    setCircleY(e.pageY - e.currentTarget.offsetTop)
```

## 按钮元素

```jsx
<RippleButton
    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
    Click Me{' '}
    {flag && (
        <Circle
            style={{
                top: circleY + 'px',
                    left: circleX + 'px',
            }}
            ref={circleRef}
            />
    )}
</RippleButton>
```

## 闪回

当计时器和动画时间不拉开一定差距的时候，达不到预定效果。

本来应该动画变形到3倍时消失，但是不设定好时间差会有一个一倍的图形在三倍图形消失后闪回。

暂时的解决方案是设定一定的时间差。

```jsx
const Circle = styled.span`
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%, scale(0));
  animation: scale 0.5s ease-out;
`

  useEffect(() => {
    if (flag) {
      timeoutId = setTimeout(() => {
        setFlag(false)
      }, 450)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [flag])

{flag && (
    <Circle
        style={{
            top: circleY + 'px',
                left: circleX + 'px',
        }}
        ref={circleRef}
        />
)}
```

