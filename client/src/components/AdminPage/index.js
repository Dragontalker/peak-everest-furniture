import { useEffect, useState } from "react";
import AccessDenied from './AccessDenied';
import ProductList from './ProductList';
import TransactionsList from './TransactionsList';
import Charts from './Charts';
import './admin.css';

function AdminPage() {

  const [hasAccess, setAccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    // redirect if userID is not admin user
    setAccess(true);
    // fetch transaction info
    setTrans([
      {userid:"123", productid:"1203-2343", status:"SOLD"},
      {userid:"123", productid:"1203-2344", status:"BOUGHT"},
      {userid:"125", productid:"1203-2343", status:"BOUGHT"},
      {userid:"125", productid:"1203-2343", status:"CANCELLED"},
      {userid:"126", productid:"1203-2345", status:"SOLD"},
      {userid:"126", productid:"1203-2345", status:"BOUGHT"},
      {userid:"125", productid:"1203-2345", status:"SOLD"}
    ])
    // fetch product info
    setProducts([
      { id:"1203-2343", heading:"Bosch Refrigerator", price:4599.99, quantity:100, rating:4 },
      { id:"1203-2344", heading:"Graco SnugRide", price:199.98, quantity:400, rating:3 },
      { id:"1203-2345", heading:"Bose Home Speaker 500", price:399.99, quantity:20, rating:5 }
    ])
  }, [])

  if (hasAccess) return(
    <div className="admin-page card mt-3">
      <div className="card-header">
        <h4>Welcome Back [Admin]</h4>
      </div>
      <div className="card-body">
        <Charts products={products} trans={trans} />
        <br/>
        <ProductList products={products} trans={trans} />
        <TransactionsList products={products} trans={trans} />
      </div>
    </div>
  )
  else return <AccessDenied />
}

export default AdminPage;