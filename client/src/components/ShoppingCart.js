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
      refreshData();
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

  async function refreshData() {
    // fetch cartData using userid
    console.log("fetching cart data");
    setCartData([
      {id:"123a", productid:"1203-2343", price:10.95, heading:"Bosch Refrigerator", transactionid:"111"},
      {id:"321b", productid:"1203-2344", price:12.45, heading:"Graco SnugRide", transactionid:"222"}
    ]);
  }

  async function handleCheckout() {
    console.log("checkout all shopping cart items");
    // SET transaction status to "BOUGHT"
    // REMOVE entry from shopping cart
    // FETCH new shoppingcart
    setCartData([]);
  }

  async function handleCancel(id) {
    console.log("cancel shopping cart item", id);
    // SET transaction status to "CANCELLED"
    // REMOVE entry from shopping cart
    // FETCH new shoppingcart
    let newCart = cartData.filter(entry => entry.id !== id);
    setCartData(newCart);
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
            <li className="list-group-item d-flex shop-cart-item" key={item.id}>
              <div className="flex-fill ms-2 mt-1" style={{transform:"rotate(0)"}}>
                <p className="card-text">
                  {item.heading.length < 23 ? item.heading : item.heading.slice(0,22) + "..."}
                </p>
                <Link className="stretched-link" to={"/product/"+item.productid} 
                  onClick={() => setStore({type:"toggle-shop-cart"})}>Go to product page</Link>
              </div>
              <div className="mt-auto">
                <p className="text-end me-2">${item.price}</p>
                <button className="btn btn-sm link-danger" onClick={() => handleCancel(item.id)}>Remove</button>
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