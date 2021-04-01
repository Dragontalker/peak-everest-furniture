import { useState, useEffect, useRef } from 'react';
import { useStoreContext } from './GlobalStore';

function ShoppingCart() {

  const shoppingCart = useRef(null);
  const [visible, setVisible] = useState(false);
  const [store, setStore] = useStoreContext();

  useEffect(() => {
    if (store.openShopCart) setVisible(true);
    else if (visible && !store.openShopCart) {
      shoppingCart.current.classList.add("shop-cart-close");
      setTimeout(() => { 
        shoppingCart.current.classList.remove("shop-cart-close");
        setVisible(false);
      }, 290);
    }
    // eslint-disable-next-line
  }, [store.openShopCart])

  function handleCheckout(id) {
    console.log("checkout shopping cart item", id);
    setStore({type:"checkout", id:id});
  }

  function handleCancel(id) {
    console.log("cancel shopping cart item", id);
    setStore({type:"cancel", id:id});
  }

  if (visible) {
    return(
      <div className="shop-cart-body" ref={shoppingCart}>
        <h4 className="mt-2 mb-3">Shopping Cart</h4>
        <ul className="list-group">
          {store.shoppingCart.map(item => 
            <li className="list-group-item d-flex shop-cart-item" key={item.id}>
              <div className="flex-fill ms-2 mt-1" style={{transform:"rotate(0)"}}>
                <h5 className="card-text">
                  {item.heading.length < 23 ? item.heading : item.heading.slice(0,22) + "..."}
                </h5>
                <a className="stretched-link" href={"/product/"+item.productid}>Go to product page</a>
              </div>
              
              <div className="btn-group-vertical justify-content-end">
                <button className="btn btn-outline-dark" onClick={() => handleCheckout(item.id)}>Checkout</button>
                <button className="btn btn-outline-danger" onClick={() => handleCancel(item.id)}>Cancel</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
  else return null;
  
}

export default ShoppingCart;