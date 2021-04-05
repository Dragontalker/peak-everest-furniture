import { useEffect, useState } from "react";
import AccessDenied from './AccessDenied';
import ProductList from './ProductList';
import TransactionsList from './TransactionsList';
import Charts from './Charts';
import ProductDetails from './ProductDetails';
import './admin.css';

function AdminPage() {

  const [hasAccess, setAccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [trans, setTrans] = useState([]);
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    // redirect if userID is not admin user
    async function checkUser() {
      let sessionId = localStorage.getItem("sessionId")
      let res = await fetch(`/api/users/${sessionId}`).then(r => r.json());
      if (res.isAdmin) {
        console.log("Welcome admin");
        setAccess(true);
        refreshData();
      }
      else console.log("Access denied");
    }
    checkUser();
  }, [])

  async function refreshData() {
    // fetch product info
    const prodRes = await fetch("/api/products").then(r => r.json());
    if (prodRes.error) console.log(prodRes.error);
    else setProducts(prodRes);
    // fetch transaction info
    const transRes = await fetch("/api/transactions", {
      method: "GET",
      headers: { "sessionId":localStorage.getItem("sessionId") }
    }).then(r => r.json());
    if (transRes.error) console.log(transRes.error);
    else setTrans(transRes);
  }

  if (hasAccess) return(
    <div className="admin-page card my-3">
      <div className="card-header">
        <h4>Welcome Back [Admin]</h4>
      </div>
      <div className="card-body">
        <Charts products={products} trans={trans} />
        <br/>
        <ProductList products={products} trans={trans} setPopupProduct={setPopupProduct} />
        <TransactionsList products={products} trans={trans} refreshData={refreshData} />
      </div>
      {popupProduct ? <ProductDetails product={popupProduct} setPopupProduct={setPopupProduct} refreshData={refreshData} /> : ""}
    </div>
  )
  else return <AccessDenied />
}

export default AdminPage;