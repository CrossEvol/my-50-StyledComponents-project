## 给遍历的一群组件动态挂载ref的思路

核心是 `itemsRef.current = new Map()`

```js
import { useRef } from 'react';

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
             
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}


```

## 副作用是给屏幕绑定滚动事件

```js
 useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

```

## 直接操作样式

修改数据显得过于麻烦了，而且修改数据页面得重新生成真实dom

```js
const handleScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4
    const map = getMap()
    map.forEach(node => {
      const boxTop = node.getBoundingClientRect().top
      if (boxTop < triggerBottom) {
        node.classList.add('show')
      } else {
        node.classList.remove('show')
      }
    })
  }
```

## 弹性布局居中

```css
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
```

## 移入移出的动画效果

```css
transform: translateX(400%);
transition: transform 0.4s ease;

&:nth-of-type(even) {
    transform: translateX(-400%);
}

&.show {
    transform: translateX(0);
}
```

