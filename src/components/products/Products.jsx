import React, { useEffect, useState } from 'react'
import './products.css'

const Products = () => {

  const [products , setProducts] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      const url = "https://dummyjson.com/products"
      const responce = await fetch(url)
      const data = await responce.json()
      setProducts(data.products)
    }
    getData()
  },[])

  return (
    <>
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-4 mb-4'>
        <input type="search" className='search' />
      </div>
      <ul className='products-container row'>
        {products.map(eachProduct =>{
        const {id,title,description,price,rating,brand,category,images} = eachProduct
        const imageUrl=images[0]
        return(
          <li key={id} className='col-12 col-md-6 col-lg-3'>
            <div className='card m-2 p-3 d-flex flex-column align-items-center text-center'>
              <img src={imageUrl} alt={title} className='product-image'/>
              <h4>Title: {title}</h4>
              <p>Price: {price}</p>
              <p>Rating: {rating}</p>
              <p>Category: {category}</p>
              <p className='description'>Description: {description}</p>
              <button className='btn btn-warning'>Add to Cart</button>
            </div>

          </li>
        )
        })}
      </ul>
    </div>
    </>
    
  )
}

export default Products