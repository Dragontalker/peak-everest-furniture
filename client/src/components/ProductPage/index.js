import { useEffect, useState } from 'react';
import './productPage.css'

function ProductPage() {

  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(window.location.pathname);
    // productID in the pathname ^, API call DB for product info
    setProduct({id:window.location.pathname.replace("/product/",""), name:"[Product Name]", price:100});
  },[])

  return(
      <div className="card mb-3 card-background">
        <div className="row g-0">
          <div className="col-md-6">
            {/* <img src={product.img} alt={product.name} */}
            <img className="productPage-img" src="https://i.gyazo.com/97b764beb0a96af871fec590c7e217c3.png" alt={product.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              {/* <h1 className="card-title">product.name</h1>
              <h5>product.price</h5>
              <p className="card-text">Description:</p>
              <p className="card-text">product.description</p>
              <br/> */}
              <h1 className="card-title">{product.name}</h1>
              <h5>${product.price}</h5>
              <p className="card-text">Description</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Quam lacus suspendisse faucibus interdum posuere. Non tellus orci ac auctor augue mauris augue neque gravida. Proin sagittis nisl rhoncus mattis rhoncus urna. Lobortis elementum nibh tellus molestie nunc non blandit. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Pellentesque massa placerat duis ultricies.</p>
              <br/>
              <button className="btn btn-dark product-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductPage;