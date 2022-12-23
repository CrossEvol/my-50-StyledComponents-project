1. 不要定义body的样式，而是作为div的样式，因为body只会挂载到全局body上，而且所有元素都在#root的div中，body是不能挂载在div下的，使用一下方式来定义

   ```js
   const ThirdBody = styled.div`
     font-family: 'Lato', sans-serif;
     background-color: #333;
     color: #222;
     overflow-x: hidden;
     margin: 0;
   `
   ```

   

2. 关于选择器的使用

   ```css
   &.show-nav { //带有某个类名的当前组件
       transform: rotate(-20deg);
   }
   
   &:focus { //触发focus事件的当前组件
       outline: none;
   }
   
   & + & { //当前组件直接相邻的兄弟组件
       margin-left: 15px;
       transform: translateX(-150%);
     }
   
     &.third { // 带有某个类名的当前组件
       margin-left: 30px;
       transform: translateX(-200%);
     }
   
     .show-nav & { //带有某个类名的父组件下的当前组件
       transform: translateX(0);
       transition-delay: 0.3s;
     }
   
   &:hover { //触发hover事件的当前组件
       color: #ff7979;
       font-weight: bold;
   }
   ```



3. 遇到<ul>和<li>样式不生效的情况时，不用纠结，直接使用div就好。
