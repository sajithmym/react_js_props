import { useState } from 'react'
import './App.css'
import Display from './display'
import Get from './get'

function App() {

  const [name,set] = useState("")

  return (
    <div>
      
      <Get seting={set}/>
      <Display show={name}/>
      
    </div>
  )
}

export default App
