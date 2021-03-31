import { useState, useEffect, useRef } from 'react';
import { useStoreContext } from './GlobalStore';

function ShoppingCart() {

  const shoppingCart = useRef(null);
  const [visible, setVisible] = useState(false);
  const [store] = useStoreContext();

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

  if (visible) {
    return(
      <div className="shop-cart-body" ref={shoppingCart}>
        <h4 className="mt-2 mb-3">Shopping Cart</h4>
        <ul className="list-group">
          {store.shoppingCart.map(item => 
            <li className="list-group-item d-flex shop-cart-item" key={item.id}>
                <img className="img-thumbnail me-1" src={item.picture} alt={item.title} />
                <p className="card-text flex-fill">{item.title}</p>
                <div className="btn-group-vertical justify-content-end">
                  <button className="btn btn-sm btn-outline-dark">Checkout</button>
                  <button className="btn btn-sm btn-outline-danger">Cancel</button>
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