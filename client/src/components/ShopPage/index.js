import "./shop.css"
import { useEffect, useState } from 'react'


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
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg" class="d-block w-100 carousel-image" alt="desk"/> 
            <div class="carousel-caption d-none d-md-block">
              <h5>Standing Desk</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png" class="d-block w-100 carousel-image" alt="chair"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Ergonomic Chair</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png" class="d-block w-100 carousel-image" alt="chair"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Featured Setup</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr/>
      <div>
        <h1>All Products</h1>
        <div class="card-body">
          <div class="row">
            {/* products.map( product => ) */}
            <div class="card">
              <img class="card-image" alt="product"/>
              <div class="card-body">
                Hello
              </div>
            </div>
            <div class="card">
              <img class="card-image" alt="product"/>
              <div class="card-body">
                Hello
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </>

  )
}

export default ShopPage