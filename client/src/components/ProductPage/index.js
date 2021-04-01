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
      <div className="container-flex justify-content">
      <div className="card mb-3 card-background">
        <div className="row">
          <div className="col-md-6">
            {/* <img src={product.img} alt={product.name} */}
            {product.image && product.image.map( img => 
            <div className="col-lg-6 col-md-12 col-sm-12 outline d-flex align-items-stretch margin">
              <div className="card">
                <img src={img} alt={product.name}/>
              </div>
            </div>)}
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
      </div>
  )
}

export default ProductPage;