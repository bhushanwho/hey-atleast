import './App.css'
import { Typewriter } from 'react-simple-typewriter'


function App() {

  return (
    <div className="container">
      <h1> hey,<br></br> at least</h1>
      <p>you
        <Typewriter
          words={[' are a cute little monkey boy but what if this becomes more']}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={70}
        />
      </p>
    </div>
  )
}

export default App
