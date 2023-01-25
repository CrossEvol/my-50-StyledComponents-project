## 使用Map给遍历生成的组件逐个挂载ref

```tsx
const soundsRef = useRef<Map<string, HTMLAudioElement> | null>(null)

const handleClickButton = (soundId: string) => {
    const map = getMap()
    map.forEach(song => {
        song.pause()
        song.currentTime = 0
    })
    const node = map.get(soundId)
    node?.play()
}

function getMap() {
    if (!soundsRef.current) {
        soundsRef.current = new Map()
    }
    return soundsRef.current
}
// ... 

{sounds.map(sound => {
    return (
        <audio
            key={sound.id}
            ref={node => {
                const map = getMap()
                if (node) {
                    map.set(sound.name, node)
                } else {
                    map.delete(sound.name)
                }
            }}
            src={sound.url}
            />
    )
})}
```

