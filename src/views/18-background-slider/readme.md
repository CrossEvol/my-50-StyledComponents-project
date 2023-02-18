## 层级

通过`z-index`来设置层级达到遮罩的效果。

## imgUrl

在style属性里设置backgroundImage的方式：

```jsx
<Slide
    className={item.order === activeNum ? 'active' : ' '}
    style={{ backgroundImage: `url(${item.imgUrl})` }}
    key={item.id}>
</Slide>
```

