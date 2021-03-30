import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./shop.css"
// import { useEffect, useState } from 'react'

const bannerData = [
  {img:"https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg"},
  {img:"https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png"},
  {img:"https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png"}
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
      <Carousel autoPlay centerMode centerSlidePercentage={100} infiniteLoop transitionTime={800} interval={3000}
        showArrows={false} showThumbs={false} showStatus={false}>
        {/* create slides */}
        {bannerData.map((each,idx) => 
          <div key={idx} className="slide-item">
            <span>Banner #{idx+1}</span>
            <img src={each.img} alt="product" />
          </div>
        )}
      </Carousel>
      <hr/>
      <div className="all-products-list mb-3">
        <h1>All Products</h1>
          <div className="row">
            <div className="card">
              <img className="card-image" alt="product"/>
              <div className="card-body">
                Hello
              </div>
            </div>
            {/* products.map( (product, idx) => )
            <div key={idx} className="card">
              <img className="card-image" alt="product"/>
              <div className="card-body">
                Hello
                <h5 class="card-title">product.name</h5>
                <p class="card-text"> product.description</p>
                <p class="card-text"> product.price</p>
                *
              </div>
            </div>*/}
          </div>
      </div>
    </div>
  )
}

export default ShopPage