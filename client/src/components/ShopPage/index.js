import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./shop.css"

function ShopPage() {

  const [banner, setBanner] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(function () {
    init();
  }, []);

  async function init() {
    // fetch banner info
    const bannerData = [
      {heading:"Banner #1", desc:"Extra info 1", img:"https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/categories/gaming/it_cmp_gaming_motia_gaming_table.jpg"},
      {heading:"Banner #2", desc:"Extra info 2", img:"https://i.gyazo.com/cc114cc01d65fa4820be8652151b61b0.png"},
      {heading:"Banner #3", desc:"Extra info 3", img:"https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png"}
    ];
    setBanner(bannerData);
    // fetch product info
    const productData = await fetch('/api/products').then(r=>r.json());
    setProducts(productData);
  }

  return(
    <div className="shop-page mt-3">
      <Carousel autoPlay centerMode centerSlidePercentage={100} infiniteLoop transitionTime={800} interval={3000}
        showArrows={false} showThumbs={false} showStatus={false}>
        {/* create slides */}
        {banner.map((each,idx) => 
          <div key={idx} className="slide-item">
            <div className="desc">
              <h3>{each.heading}</h3>
              <p>{each.desc}</p>
            </div>
            <img src={each.img} alt="product" />
          </div>
        )}
      </Carousel>
      <hr/>
      <div className="all-products-list mb-3">
        <h1>All Products</h1>
          <div className="row">
            {products && products.map((product, idx) => 
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <div className="card">
                  <div className="shop-card-img">
                    <img src={product.image[0]} className="card-img-top img-fluid" alt={product.heading} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.heading}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={"/product/"+product._id} className="stretched-link">See Product</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default ShopPage;