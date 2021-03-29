import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function Navbar() {

  const [store, updateStore] = useStoreContext();

  function handleLogout() {
    updateStore({type:"logout"});
  }

  function renderNavigation() {
    if (store.loggedIn) return(
      <div class="navbar-nav">
        <NavLink exact to="/" className="nav-link" activeClassName="disabled">Home</NavLink>
        <button className="btn nav-link" onClick={handleLogout}>Logout</button>
      </div>
    )
    else return (
      <div class="navbar-nav">
        <span className="nav-link text-muted">{store.winX}x{store.winY}</span>
        <NavLink exact to="/" className="nav-link" activeClassName="disabled">Home</NavLink>
        <NavLink to="/register" className="nav-link" activeClassName="disabled">Register</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="disabled">Login</NavLink>
      </div>
    )
  }

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo/Branding */}
        <span className="navbar-brand">Peak Everest Furnitures</span>
        {/* Navlinks */}
        {renderNavigation()}
      </div>
    </nav>
  )
}

export default Navbar;