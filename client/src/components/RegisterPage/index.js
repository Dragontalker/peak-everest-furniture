import { useState, useRef } from 'react';

function RegisterPage() {

  const [emailErr, setEmailErr] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const nameInputDiv = useRef(null);
  const emailInputDiv = useRef(null);
  const pwInputDiv = useRef(null);
  const repwInputDiv = useRef(null);

  function checkValidateEmail() {
    const email = emailInputDiv.current.value;
    // check if email is formatted properly
    const regex = new RegExp('.+@.+\\..+');
    if (!regex.test(email)) {
      emailInputDiv.current.classList.add("is-invalid");
      setEmailErr('Invalid email format');
      return false;
    }
    return true;
  }

  function checkValidatePassword() {
    const [password, repassword] = [pwInputDiv.current.value, repwInputDiv.current.value];
    // check if password was entered
    if (password.length < 1) {
      pwInputDiv.current.classList.add("is-invalid");
      repwInputDiv.current.classList.add("is-invalid");
      setPwErr("Please enter a password");
      return false;
    }
    // check if passwords are the same
    if (password !== repassword) {
      pwInputDiv.current.classList.add("is-invalid");
      repwInputDiv.current.classList.add("is-invalid");
      setPwErr("Passwords do not match");
      return false;
    }
    return true;
  }

  async function submitForm(e) {
    e.preventDefault();
    console.log("Attempting to sign up");
    // reset errors
    emailInputDiv.current.classList.remove("is-invalid");
    pwInputDiv.current.classList.remove("is-invalid");
    repwInputDiv.current.classList.remove("is-invalid");
    setEmailErr("");
    setPwErr("");
    setSuccessMsg("");
    // validate email/password
    if (!checkValidateEmail()) return;
    if (!checkValidatePassword()) return;
    // submit user info to DB
    const userInfo = {
      displayName: nameInputDiv.current.value,
      email: emailInputDiv.current.value,
      password: pwInputDiv.current.value
    };
    const res = await fetch('/api/users', {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {"Content-Type": "application/json"}
    }).then(r => r.json());
    // handle error
    if (res.emailAlreadyExists) {
      emailInputDiv.current.classList.add("is-invalid");
      setEmailErr("You are already registered");
    }
    else setSuccessMsg("Registration successful.");
  }

  return (
    <div className="card mt-3 login-body">
      <div className="card-body">
        <h5 className="card-title mb-3">Sign Up</h5>
        <form onSubmit={(e) => submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="displayNameInput" className="form-label">Display name</label>
            <input name='name' type="text" className="form-control" id="displayNameInput" 
              placeholder="name" ref={nameInputDiv} />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input name='email' type="email" className="form-control" id="emailInput" 
              placeholder="name@example.com" ref={emailInputDiv} />
            {emailErr.length > 0 ? <span className="invalid-feedback">{emailErr}</span> : "" }
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-check-label" >Password</label>
            <input name='password' type="password" className="form-control" id="passwordInput" 
              placeholder="********" ref={pwInputDiv} />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordReinput" className="form-check-label" >Confirm Password</label>
            <input name='repassword' type="password" className="form-control" id="passwordReinput" 
              placeholder="********" ref={repwInputDiv} />
            {pwErr.length > 0 ? <span className="invalid-feedback">{pwErr}</span> : "" }
          </div>
          <div className="text-center mb-3">
            {successMsg.length > 0 ? <p className="d-block valid-feedback">{successMsg}</p> : "" }
            <button className="btn btn-dark">Register</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default RegisterPage;