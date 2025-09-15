import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState, useCallback } from 'react'

function App() {
  const fallback_resp =
    "you don't actively exhaust and rate-limit a silly little project's LLM calls. . . . . oh wait."

  const [line, setLine] = useState("")

  const fetchLine = useCallback(async () => {
    try {
      setLine("");
      const res = await fetch("https://hey-atleast-worker.bhushanwho.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      })
      const data = await res.json()

      if (!res.ok || data.error) {
        setLine(`you don't ${fallback_resp}`)
      } else {
        setLine(`you don't ${data.text}`)
      }
    } catch {
      setLine(fallback_resp)
    }
  }, [])

  useEffect(() => {
    fetchLine()
  }, [fetchLine])

  return (
    <>
    
    <div className="container">

      <button type="button" class="button-4" onClick={fetchLine}>
        new quote
       </button>
      
      <h1>
        hey,<br /> at least
      </h1>
      <p>
        {line && (
          <Typewriter
            key={line}
            words={[line]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={75}
          />
        )}
      </p>

    </div>
    </>
  )
}

export default App
