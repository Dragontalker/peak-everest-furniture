import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function Navbar() {

  const [store] = useStoreContext();

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo/Branding */}
        <span className="navbar-brand">Project 3</span>
        {/* Navlinks */}
        <div class="navbar-nav">
          <span className="nav-link text-muted">{store.winDim.x}x{store.winDim.y}</span>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;