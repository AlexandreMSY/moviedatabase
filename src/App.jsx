import { useState } from 'react'
import GetMovieData from './components/GetMovieData'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const testing = [{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"73/100"}]
  return (
    <div>
      <GetMovieData />
    </div>
  )
}

export default App
