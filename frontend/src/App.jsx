import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }
  , [])


  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <h1>{product.product_name}</h1>
        </div>
      ))}
    </>
  )
}

export default App
