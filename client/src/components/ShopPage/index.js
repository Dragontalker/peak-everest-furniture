import Carousel from "./Carousel"
import "./shop.css"
// import { useEffect, useState } from 'react'

function ShopPage() {
  // const [products, setProducts] = useState([])

  // useEffect(function () {
  //   init()
  // }, [])

  // async function init() {
  //   const url = ''
  //   const data = await fetch(url).then(r=>r.json)
  //   setProducts(data)
  // }

  return(
    <div className="shop-page mt-3">
      <Carousel />
      <hr/>
      <div className="all-products-list mb-3">
        <h1>All Products</h1>
          <div className="row">
            {/* products.map( product => ) */}
            <div className="card">
              <img className="card-image" alt="product"/>
              <div className="card-body">
                Hello
                {/* 
                <h5 class="card-title">product.name</h5>
                <p class="card-text"> product.description</p>
                <p class="card-text"> product.price</p>
                */}
              </div>
            </div>
            <div className="card">
              <img className="card-image" alt="product"/>
              <div className="card-body">
                Hello
                {/* 
                <h5 class="card-title">product.name</h5>
                <p class="card-text"> product.description</p>
                <p class="card-text"> product.price</p>
                */}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ShopPage