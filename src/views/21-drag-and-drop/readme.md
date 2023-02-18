## API网站

https://source.unsplash.com/random/150x150

访问速度可能有点慢，建议直接用本地图片

## 拖动事件

注意`dragover`和`dragenter`都要防止提交，否则不生效

现在比较好奇这种不断改变属性生成新对象的做法和直接操作ref相比性能能相差多少

```tsx
interface BoxItem {
  id: number
  hasSubFillBox: boolean
  isHeld: boolean
  isHovered: boolean
  isInvisible: boolean
}

const handleDragStart = (boxItemId: number) => {
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, isHeld: true }
          : { ...boxItem, isHeld: false },
      ),
    )
    setTimeout(() => {
      setBoxItems(
        boxItems.map(boxItem =>
          boxItem.id === boxItemId
            ? { ...boxItem, isInvisible: true }
            : { ...boxItem, isInvisible: false },
        ),
      )
    }, 0)
  }
  const handleDragEnd = () => {
    setBoxItems(boxItems.map(boxItem => ({ ...boxItem, isHeld: false })))
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    boxItemId: number,
  ) => {
    e.preventDefault()
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, isHovered: true }
          : { ...boxItem, isHovered: false },
      ),
    )
  }
  const handleDragLeave = () => {
    setBoxItems(boxItems.map(boxItem => ({ ...boxItem, isHovered: false })))
  }

  const handleDrop = (boxItemId: number) => {
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, hasSubFillBox: true, isHovered: false }
          : { ...boxItem, hasSubFillBox: false, isHovered: false },
      ),
    )
  }
```

