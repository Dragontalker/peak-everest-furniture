import { useEffect, useState } from "react";

function ProductList(props) {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let productData = props.products;
    // consolidate data
    let total = 0;
    productData.forEach(product => {
      product.unitsSold = 0;
      product.profit = 0;
      props.trans.forEach(entry => {
        if (product.id === entry.productid && (entry.status==="BOUGHT" || entry.status==="SOLD")) product.unitsSold += 1;
      })
      product.profit = product.unitsSold*product.price;
      total += product.profit;
    })
    // set extended products array
    setProducts(productData);
    setTotal(total.toFixed(2));
  }, [props])

  return(
    <div className="admin-product-list table-responsive">
      <div className="header">
        <h5>Product List</h5> 
        <button className="btn btn-sm btn-dark" onClick={() => props.setPopupProduct({})}>Add New Product</button>
      </div>
      
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Units Sold</th>
            <th scope="col">Profit</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product,idx) => {
            return <tr key={idx}>
              <td>{product.id}</td>
              <th>{product.heading}</th>
              <td>{product.price}</td>
              <td>{product.unitsSold}</td>
              <td>${product.profit}</td>
              <td className="text-end">
                <button className="btn btn-sm btn-outline-dark" onClick={() => props.setPopupProduct(product)}>Edit</button>
              </td>
            </tr>
          })}
        </tbody>

        <tfoot>
          <tr>
            <td></td><td></td><td></td>
            <th scope="row">Total:</th>
            <td>${total}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ProductList;