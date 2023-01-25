# TODO

没有完全完成

- 动画效果或者说转换效果没有实现
- 有内容的时候label不应该归位也没有实现
- 需要复习css的animation属性

# 背景色透明

```css
background-color: transparent;
```

*`background-color:transparent;`*就是把背景色设置为透明。不过，默认情况下只要不设置背景颜色（或者背景图片），背景就是透明的

# 点击穿透

```css
pointer-events: none;
```

元素永远不会成为鼠标事件的[target (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)。但是，当其后代元素的`pointer-events`属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。

# 需要填写内容的input

![image-20230117155945931](readme.assets/image-20230117155945931.png)

```html
<input type="" required/>
```

# CSS :valid 选择器

如果 input 元素中输入的值为合法的，设置其为黄色:

```css
input:valid {    background-color: yellow; }
```

# 贝塞尔曲线

> transition-timing-function

取值：

- `linear`：
  线性过渡。等同于`贝塞尔曲线`(0.0, 0.0, 1.0, 1.0)
- `ease`：
  平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
- `ease-in`：
  由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
- `ease-out`：
  由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
- `ease-in-out`：
  由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- `step-start`：
  等同于 steps(1, start)
- `step-end`：
  等同于 steps(1, end)
- `steps(<integer>[, [ start | end ] ]?)`：
  接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
- `cubic-bezier(<number>, <number>, <number>, <number>)`：
  特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内