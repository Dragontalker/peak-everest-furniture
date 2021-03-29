import { useRef } from "react";
import './login.css';

function LoginPage() {

  const email = useRef(null);
  const pw = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    console.log("trying to login");
  }

  return(
    <div className="card mt-3 login-body">
      <div className="card-body">
        <h5 className="card-title mb-3">Login</h5>
        <form onSubmit={e => submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" ref={email} placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" className="form-control" ref={pw} id="passwordInput" placeholder="********" />
          </div>
          <div className="text-center mb-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="text-center mb-3">
          <button className="btn btn-secondary">Create a new account</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;