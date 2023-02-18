## 如何表示钟表指针的移动

```jsx
const scale = (
  num: number,
  stepMin: number,
  stepMax: number,
  lenMin: number,
  lenMax: number,
) => {
  return ((num - stepMin) * (lenMax - lenMin)) / (stepMax - stepMin) + lenMin
}

//...

<Clock>
    <HourNeedle
        style={{
            transform: `translate(-50%, -100%) rotate(${scale(
                formatedHours % 12,
                0,
                12,
                0,
                360,
            )}deg)`,
        }}
        />
    <MinuteNeedle
        style={{
            transform: `translate(-50%, -100%) rotate(${scale(
                minutes,
                0,
                60,
                0,
                360,
            )}deg)`,
        }}
        />
    <SecondNeedle
        style={{
            transform: `translate(-50%, -100%) rotate(${scale(
                seconds,
                0,
                60,
                0,
                360,
            )}deg)`,
        }}
        />
    <CenterPoint />
</Clock>
```

## 格式错误

中文分号和英文分号，可能是插件的原因，没有办法被识别到，但是会导致样式失效。

## 使用定时器

```jsx
  let clockIntervalId: NodeJS.Timer | undefined = undefined

  useEffect(() => {
    clockIntervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(clockIntervalId)
    }
  }, [])
```

## createGlobalStyle()

```jsx
const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #000;
  --secondary-color: #fff;
  --red-color: #e74c3c;
  }

  html {
    transition: all .5s ease-in;
  }

  html.dark {
    --primary-color: #fff;
    --secondary-color:#333;
  }

  html.dark {
    background-color: #111;
    color: var(--primary-color);
  }

  body {
    
  }

`
```

可以操作index.html上才存在的变量，但是这个方法有个问题是，如果操作body，jsx中书写的JSX.Element必须通过<></>包裹，此时嵌套关系被破坏了。

## 直接操作html

不通过ref，对这种有且仅有一个的标签，直接搜索出来操作即可

```jsx
  useEffect(() => {
    const changeHtmlMode = () => {
      const html = document.querySelector('html')
      if (html?.classList.contains('dark')) {
        html.classList.remove('dark')
      } else if (isDarkMode) {
        html?.classList.add('dark')
      }
    }
    changeHtmlMode()
    return () => {}
  }, [isDarkMode])
```

## button标签的时间类型

```jsx
(event:React.MouseEvent<HTMLButtonElement>)
```

## transform-origin

**`transform-origin`** CSS 属性让你更改一个元素变形的原点。



