import './App.css'
import { Typewriter } from 'react-simple-typewriter'


function App() {

  const fallback_resp = " aren't rate-limiting a silly little project's LLM calls. . . . . . . . . . . . oh wait."
  let response = " heehee"

  return (
    <div className="container">
      <h1> hey,<br></br> at least</h1>
      <p>you
        <Typewriter
          words={[fallback_resp]}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={50}
        />
      </p>
    </div>
  )
}

export default App
