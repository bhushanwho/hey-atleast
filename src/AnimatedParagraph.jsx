import { useEffect, useState, useRef } from 'react'

function AnimatedParagraph({text}, paraRef) {

    const words = text.split(' ');
    const [visibleCount, setVisibleCount] = useState(0)

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
        i++
        setVisibleCount(i)
        if (i >= words.length) clearInterval(interval)
        }, 200)
        return () => clearInterval(interval)
    }, [text, words.length])

     return <p>{words.slice(0, visibleCount).join(' ')}</p>

}

export default AnimatedParagraph