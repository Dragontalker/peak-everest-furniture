function RegisterPage() {

  function submitForm(e) {
    e.preventDefault();
    console.log("attempting to sign up");
  }

  return(
    <div className="card mt-3 login-body">
      <div className="card-body">
        <h5 className="card-title mb-3">Sign Up</h5>
        <form onSubmit={e => submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="displayNameInput" className="form-label">Display name</label>
            <input type="text" className="form-control" id="displayNameInput" placeholder="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-check-label" >Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="********" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordReinput" className="form-check-label" >Confirm Password</label>
            <input type="password" className="form-control" id="passwordReinput" placeholder="********" />
          </div>
          <div className="text-center mb-3">
            <button className="btn btn-dark">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;