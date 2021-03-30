import { useEffect, useState } from 'react';

function ProductPage() {

  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(window.location.pathname);
    // productID in the pathname ^, API call DB for product info
    setProduct({name:"product name"});
  },[])

  return(
    <div>
      Product Page: {product.name}
    </div>
  )
}

export default ProductPage;