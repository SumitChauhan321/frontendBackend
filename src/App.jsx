import { useState } from 'react'

import './App.css'
import MovieGallery from './components/MovieGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < MovieGallery />
    </>
  )
}

export default App
