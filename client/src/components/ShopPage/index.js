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
      <div id="carouselExampleDark" class="carousel carousel-dark slide mt-2" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src="https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg" class="d-block w-100" alt="desk"/> 
            <div class="carousel-caption d-none d-md-block">
              <h5>Standing Desk</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png" class="d-block w-100" alt="chair"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Ergonomic Chair</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png" class="d-block w-100" alt="chair"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Featured Setup</h5>
            </div>
          </div>
        </div>
      </div>
      {/* products.map( products => 
        
        ) */}
    </>
  )
}

export default ShopPage