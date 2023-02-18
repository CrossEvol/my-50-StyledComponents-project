## 逻辑

复杂的条件判断一定要写清楚步骤或者画清楚流程图

一步步调试效率是非常低的

## 弹性布局

纵向的弹性布局，两个元素，下方元素根据数目改变高度，改变到最后一点的时候，上方元素会强行留下一小截。

解决：

上方元素样式

```js
const Remained = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 0;
  flex: 1;
  transition: 0.3s ease;
`
```

 核心是
```css
  height: 0;
  flex: 1;
```

## 变量命名

给boolean类型的变量命名时，尽量选择一个默认值为false的便于理解的变量命名
