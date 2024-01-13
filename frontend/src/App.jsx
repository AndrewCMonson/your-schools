import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/')
      const data = await res.text()
      setProducts(data)
    }
    fetchProducts()
  }
  , [])


  return (
    <>
      <h1 className="text-3xl font-bold underline">{products}</h1>
    </>
  )
}

export default App
