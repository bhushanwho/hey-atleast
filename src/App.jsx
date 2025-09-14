import { useEffect, useRef } from 'react'
import './App.css'
import AnimatedParagraph from './AnimatedParagraph'

function App() {
  const headingRef = useRef(null)
  const paraRef = useRef(null)

  useEffect(() => {
    function syncWidth() {
      if (headingRef.current && paraRef.current) {
        paraRef.current.style.maxWidth = headingRef.current.offsetWidth + 'px'
      }
    }
    syncWidth()
    window.addEventListener('resize', syncWidth)
    return () => window.removeEventListener('resize', syncWidth)
  }, [])

  return (
    <div className="container">
      <h1 ref={headingRef}>hey, at least</h1>
      <AnimatedParagraph 
        ref={paraRef}
        text="are a cute little monkey boy hehehe i'm so cute but what happens if it extends" 
      />
    </div>
  )
}

export default App
