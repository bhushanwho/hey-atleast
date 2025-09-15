import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'

function App() {
  const fallback_resp =
    " actively exhaust and rate-limit a silly little project's LLM calls. . . . . oh wait."

  const [line, setLine] = useState("")

  useEffect(() => {
    async function fetchLine() {
      try {
        const res = await fetch("https://hey-atleast-worker.bhushanwho.workers.dev/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        })
        const data = await res.json()

        if (!res.ok || data.error) {
          setLine(fallback_resp)
        } else {
          setLine(data.text)
        }
      } catch (e) {
        setLine(fallback_resp)
      }
    }

    fetchLine()
  }, [])

  return (
    <div className="container">
      <h1>
        hey,<br /> at least
      </h1>
      <p>
        {line && (
          <Typewriter
            words={["you don't " + line]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={75}
          />
        )}
      </p>
    </div>
  )
}

export default App
