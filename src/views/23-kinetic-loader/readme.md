## globalStyle中定义动画

```css
const GlobalStyle = createGlobalStyle`
  @keyframes rotateA {
    0%,
    25% {
        transform: rotate(0deg);
    }

    50%,
    75% {
        transform: rotate(180deg);
    }

    
    100% {
        transform: rotate(360deg);
    }
  }

  @keyframes rotateB {
    0%,
    25% {
        transform: rotate(90deg);
    }

    50%,
    75% {
        transform: rotate(270deg);
    }

    
    100% {
        transform: rotate(450deg);
    }
  }
`
```

## css画三角形

核心是四个方向border尺寸的设置。

```css
const Kinetic = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #fff;
    animation: rotateA 2s linear infinite 0.5s;
  }

  &::before {
    transform: rotate(90deg);
    animation: rotateB 2s linear infinite;
  }
`
```

## 无限循环以及延迟动画的设置

```css
 animation: rotateA 2s linear infinite 0.5s;
```

当用下面这个样式覆盖时，没有对应上的属性值不会被覆盖，比如说0.5s延迟。

```css
 animation: rotateB 2s linear infinite;
```

