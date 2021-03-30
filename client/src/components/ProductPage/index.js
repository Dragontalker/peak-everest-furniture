import { useEffect, useState } from 'react';

function ProductPage() {

  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(window.location.pathname);
    // productID in the pathname ^, API call DB for product info
    setProduct({id:window.location.pathname.replace("/product/","")});
  },[])

  return(
    <div>
      Product Page: {product.id}
    </div>
  )
}

export default ProductPage;