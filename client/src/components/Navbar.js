import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function Navbar() {

  const [store, updateStore] = useStoreContext();

  function handleLogout() {
    updateStore({type:"logout"});
  }

  //user is logged in
  if (store.loggedIn) {
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo/Branding */}
          <span className="navbar-brand">Project 3</span>
          <span className="navbar-brand">Hello, {store.username}</span>
          {/* Navlinks */}
          <div class="navbar-nav">
            <NavLink exact to="/" className="nav-link" activeClassName="disabled">Home</NavLink>
            <button className="btn nav-link" onClick={handleLogout}>Logout</button>
          </div>

        </div>
      </nav>
    )
  }
  // user is not logged in
  else {
    return(
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo/Branding */}
          <span className="navbar-brand">Project 3</span>
          {/* Navlinks */}
          <div class="navbar-nav">
            <span className="nav-link text-muted">{store.winX}x{store.winY}</span>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
          </div>
  
        </div>
      </nav>
    )
  }
}

export default Navbar;