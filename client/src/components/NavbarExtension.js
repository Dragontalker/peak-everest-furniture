import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function NavbarExtension() {

  const navExt = useRef(null);
  const [store, updateStore] = useStoreContext();
  const [visible, setVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (store.openNavExt) setVisible(true);
    else if (visible && !store.openNavExt) {
      navExt.current.classList.add("nav-ext-close");
      setTimeout(() => { 
        navExt.current.classList.remove("nav-ext-close");
        setVisible(false);
      }, 290);
    }
    // eslint-disable-next-line
  }, [store.openNavExt])

  useEffect(() => {
    checkUser();
  },[])

  async function checkUser() {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      const res = await fetch(`/api/users/${sessionId}`).then(r => r.json());
      if (res.isAdmin) setIsAdmin(true);
    }
  }

  function closeExt() { updateStore({type:"toggle-nav-ext"}); }

  function openShopCart() {
    updateStore({type:"toggle-shop-cart"});
    updateStore({type:"toggle-nav-ext"});
  }

  function logout() {
    updateStore({type:"logout"});
    updateStore({type:"toggle-nav-ext"});
    if (store.openShopCart) updateStore({type:"toggle-shop-cart"});
  }

  function renderNavLinks() {
    if (store.loggedIn) return(
      <div className="navbar-nav col">
        <NavLink exact to="/" className="nav-link" activeClassName="disabled" onClick={closeExt}>Home</NavLink>
        {isAdmin ? <NavLink to="/admin" className="nav-link" activeClassName="disabled">Administration</NavLink> : 
        <button className="btn nav-link" onClick={openShopCart} style={{textAlign:"right"}}>Shopping Cart</button>
        }
        <button className="btn nav-link" onClick={logout} style={{textAlign:"right"}}>Logout</button>
      </div>
    )
    else return (
      <div className="navbar-nav col">
        <NavLink exact to="/" className="nav-link" activeClassName="disabled" onClick={closeExt}>Home</NavLink>
        <NavLink to="/register" className="nav-link" activeClassName="disabled" onClick={closeExt}>Register</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="disabled" onClick={closeExt}>Login</NavLink>
      </div>
    )
  }

  if (visible && store.winX < 800) return(
    <div className="navbar navbar-dark bg-dark nav-extend" ref={navExt}>
      <div className="container-fluid">
        {renderNavLinks()}
      </div>
      
    </div>
  );
  else {
    return null;
  }

}

export default NavbarExtension;