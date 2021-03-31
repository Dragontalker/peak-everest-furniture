import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import './productPage.css'

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    init()
    // eslint-disable-next-line
  },[])

  async function init() {
    const url = `/api/products/${id}`
    const data = await fetch(url).then(r=>r.json())
    console.log(data)
    setProduct(data)
  }

  return(
      <div className="card mb-3 card-background">
        <div className="row g-0">
          <div className="col-md-6">
            {/* <img src={product.img} alt={product.name} */}
            <img className="productPage-img" src={product.image} alt={product.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              {/* <h1 className="card-title">product.name</h1>
              <h5>product.price</h5>
              <p className="card-text">Description:</p>
              <p className="card-text">product.description</p>
              <br/> */}
              <h1 className="card-title">{product.heading}</h1>
              <h5>${product.price}</h5>
              <p className="card-text">Description:</p>
              <p className="card-text">{product.description}</p>
              <br/>
              <button className="btn btn-dark product-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductPage;