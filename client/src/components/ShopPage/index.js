import Carousel from "./Carousel"
import "./shop.css"
// import { useEffect, useState } from 'react'

const products = [{
  id: 1,
  name: "chair",
  description: "sample text",
  price: 100,
  img: "https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png"
},
{  id: 2,
  name: "desk",
  description: "sample text",
  price: 200,
  img: "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg"
}
]

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
            {products.map( (product, idx) => 
            <div key={idx} className="card shop-card">
              <img src={product.img} className="shop-card-img" alt="product"/>
              <div className="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text"> {product.description}</p>
                <p class="card-text"> {product.price}</p>
              </div>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default ShopPage