## react中操作数组或对象的注意点

这种靠地址值识别的，必须构建一个新对象才能被虚拟dom认知到更新了。

```js
  const [countList, setCountList] = useState<number[]>([0, 0, 0])
  
  setCountList({ ...newCountList })
```

