import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import './productPage.css'
import { Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([])

  useEffect(() => {
    init()
    // eslint-disable-next-line
  }, [])

  async function init() {
    const url = `/api/products/${id}`
    const data = await fetch(url).then(r => r.json())
    setProduct(data)

    const otherProductsUrl = '/api/products'
    const otherProductsData = await fetch(otherProductsUrl).then(r=> r.json())
    const randomProducts = getRandomProducts(otherProductsData)
    console.log(otherProductsData)
    setOtherProducts(randomProducts)
  }

  function getRandomProducts(arr){
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, 4);
  }

  async function handleCheckout() {
    let sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      // make new entry in cart
      await fetch(`/api/users/${sessionId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productId:id, 
          heading:product.heading, 
          price:product.price, 
          status:"BUYING" 
        })
      });
    }
    else {
      // goto login screen
      window.location.replace("/login");
    }
    
  }

  return (
    <div>
      <div className="card mb-3 card-background">
        <div className="row">
          <div className="col-md-6">
            {/* <img src={product.img} alt={product.name} */}
            {product.image && product.image.map(img =>
              <div className="col-lg-6 col-md-12 col-sm-12 outline d-flex align-items-stretch margin">
                <div className="card">
                  <img src={img} alt={product.name} />
                </div>
              </div>)}
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">{product.heading}</h1>
              <h5>${product.price}</h5>
              <p className="card-text">Description:</p>
              <p className="card-text">{product.description}</p>
              <br/>
              <div className="row">
                <h5>View Other Products</h5>
                {otherProducts && otherProducts.map((product, idx) => 
                  <div key={idx} className="col-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="card cardBackground">
                      <div className="shop-card-img">
                        <Link to={"/product/"+product._id} className="stretched-link">
                        <img src={product.image[0]} className="card-img-top img-fluid" alt={product.heading} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="btn btn-dark product-button" onClick={handleCheckout}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <h1>Ratings and Reviews</h1>
      {product.reviews && product.reviews.map(review =>
        <div>
          <div className="card border-light mb-3">
          <div className="card-header">{review.name}</div>
          <div className="card-body">
            <h5 className="card-title">Rating: {review.rating}/5</h5>
            <p className="card-text">{review.review}</p>
          </div>
        </div>
        </div>
        )}
    </div>
    
  )
}

export default ProductPage;