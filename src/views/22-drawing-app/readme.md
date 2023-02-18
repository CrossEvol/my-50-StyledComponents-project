## 坐标

鼠标点击事件的中心还是没法准确获得。

MouseEvent和React.MouseEvent不同，后者有target\currentTarget\nativeEvent可以取值，但是不知道如何才能准确匹配上。

除非再研究一下坐标之间的关系，不然现在没法解决这个问题

可以考虑换个思路来实现，不给JSX.Element绑定事件，而是给原生dom绑定事件。