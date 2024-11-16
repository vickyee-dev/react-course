import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwindcss</h1>
      <Card username="hitesh"/>
      <Card username='json' post='staff'/>
      <Card />
    </>
  )
}

export default App
