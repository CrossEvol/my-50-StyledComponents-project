## 使用fetch发请求

```tsx
interface JokeResponse {
  id: string
  joke: string
  status: number
}

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data: JokeResponse = await res.json()
    setContent(data.joke)
}
```

## letter-spacing

`CSS` 的 `letter-spacing` 属性用于设置文本字符的间距表现。在渲染文本时添加到字符之间的自然间距中。`letter-spacing` 的正值会导致字符分布得更远，而 `letter-spacing` 的负值会使字符更接近。

## box-shadow语法

```css
/* x 偏移量 | y 偏移量 | 阴影颜色 */
box-shadow: 60px -16px teal;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 10px 5px 5px black;

/* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页 (阴影向内) | x 偏移量 | y 偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;

```

