## 坐标

鼠标点击事件的中心还是没法准确获得。

MouseEvent和React.MouseEvent不同，后者有target\currentTarget\nativeEvent可以取值，但是不知道如何才能准确匹配上。

除非再研究一下坐标之间的关系，不然现在没法解决这个问题

可以考虑换个思路来实现，不给JSX.Element绑定事件，而是给原生dom绑定事件。



## Canvas

需要专门学学怎么用Canvas配合react和ts画图了。

```tsx
 // 获取用于绘图的ctx对象
setCtx(canvasRef.current?.getContext('2d') as CanvasRenderingContext2D)

//绘制图像
const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
) => {
  ctx.beginPath()
  ctx.arc(x, y, size / 4, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

const drawLine = (
  ctx: CanvasRenderingContext2D,
  p1: Position,
  p2: Position,
  color: string,
  size: number,
) => {
  ctx.beginPath()
  ctx.moveTo(p1.x as number, p1.y as number)
  ctx.lineTo(p2.x as number, p2.y as number)
  ctx.strokeStyle = color
  ctx.lineWidth = size / 2
  ctx.stroke()
}
```



## 事件

react封装的事件和原生事件在属性上是很不一样的。但是问题肯定不是出在那里。

涉及到更原理性的东西。

还存在一个问题是略有延迟。



