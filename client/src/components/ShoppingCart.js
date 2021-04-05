import { useState, useEffect, useRef } from 'react';
import { useStoreContext } from './GlobalStore';
import { Link } from 'react-router-dom';

function ShoppingCart() {

  const shoppingCart = useRef(null);
  const [visible, setVisible] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [store, setStore] = useStoreContext();

  useEffect(() => {
    if (store.openShopCart) {
      refreshCart();
      setVisible(true);
    }
    else if (visible && !store.openShopCart) {
      shoppingCart.current.classList.add("shop-cart-close");
      setTimeout(() => { 
        shoppingCart.current.classList.remove("shop-cart-close");
        setVisible(false);
      }, 290);
    }
    // eslint-disable-next-line
  }, [store.openShopCart])

  async function refreshCart() {
    // refresh cart data
    let sessionId = localStorage.getItem("sessionId");
    const user = await fetch(`/api/users/${sessionId}`).then(r => r.json());
    setCartData(user.cart);
  }

  async function handleCheckout() {
    console.log("checkout all shopping cart items");
    let sessionId = localStorage.getItem("sessionId");
    // REMOVE ALL ITEMS from shopping cart/make new transactions
    const res = await fetch(`/api/users/${sessionId}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status:"CHECKOUT" })
    });
    refreshCart();
    console.log(res);
  }

  async function handleCancel(id) {
    // Remove entry from shopping cart
    let sessionId = localStorage.getItem("sessionId");
    await fetch(`/api/users/${sessionId}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId:id, status:"CANCEL" })
    });
    refreshCart();
  }

  function calculateTotal() {
    let total = 0;
    cartData.forEach(entry => {
      total += entry.price;
    })
    return total.toFixed(2);
  }

  if (visible) {
    return(
      <>
      <div className="shop-cart-body" ref={shoppingCart}>
        <h4 className="mt-2 mb-3">Shopping Cart</h4>
        <ul className="list-group">
          {cartData.length ? '' : <span className="text-muted">No items in your cart </span> }
          {cartData.map(item => 
            <li className="list-group-item d-flex shop-cart-item" key={item._id}>
              <div className="flex-fill ms-2 mt-1" style={{transform:"rotate(0)"}}>
                <p className="card-text">
                  {item.heading.length < 23 ? item.heading : item.heading.slice(0,22) + "..."}
                </p>
                <Link className="stretched-link" to={"/product/"+item.productId} 
                  onClick={() => setStore({type:"toggle-shop-cart"})}>Go to product page</Link>
              </div>
              <div className="mt-auto">
                <p className="text-end me-2">${item.price}</p>
                <button className="btn btn-sm link-danger" onClick={() => handleCancel(item._id)}>Remove</button>
              </div>
            </li>
          )}
        </ul>
        <div className="checkout-container">
          <p>Total: ${calculateTotal()} </p>
          <button className="btn btn-light" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <div className="back-cover" onClick={() => setStore({type:"toggle-shop-cart"})}></div>
      </>
    )
  }
  else return null;
  
}

export default ShoppingCart;