import { useRef, useState } from "react";
import { useStoreContext } from '../GlobalStore';
import './login.css';

function LoginPage() {

  const [, setStore] = useStoreContext();
  const [err, setErr] = useState("");

  const email = useRef(null);
  const pw = useRef(null);

  async function submitForm(e) {
    e.preventDefault();
    setErr('');
    console.log(`trying to login`);
    let res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email:email.current.value, password:pw.current.value }),
      headers: {"Content-Type": "application/json"}
    }).then(r => r.json());
    if (res.error) setErr(res.error);
    else {
      console.log(res);
      localStorage.setItem("sessionId", res.sessionId);
      setStore({type:"login"});
      window.location.replace("/");
    }
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
            {err.length>0 ? <span className="login-err">Error: {err}</span> : ""}
          </div>
          <div className="text-center mb-3">
            <button className="btn btn-dark">Login</button>
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