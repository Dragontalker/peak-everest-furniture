import {React, Component} from 'react';


class RegisterPage extends Component {
  // state
  state = {
    name: '',
    email: '',
    password: '',
    repassword: ''
  }
  // functions
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  checkValidateEmail = () => {
    const {email} = this.state
    const regex = new RegExp('.+@.+\\..+')
  
    if (!regex.test(email)) {
      alert('Invalid email format')
    }
  }

  checkValidatePassword = () => {
    const {password, repassword} = this.state
    if (password !== repassword) {
      alert("Password does not match")
      return false
    }
    return true
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("attempting to sign up");
    if (!this.checkValidateEmail()) {
      return;
    }
    if (!this.checkValidatePassword()) {
      return;
    }

    console.log('form submited')
  }

  // render
  render() {
    return(
      <div className="card mt-3 login-body">
        <div className="card-body">
          <h5 className="card-title mb-3">Sign Up</h5>
          <form onSubmit={(e) => this.submitForm(e)}>
            <div className="mb-3">
              <label htmlFor="displayNameInput" className="form-label">Display name</label>
              <input name='name' type="text" className="form-control" id="displayNameInput" placeholder="name" onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input name='email' type="email" className="form-control" id="emailInput" placeholder="name@example.com" onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-check-label" >Password</label>
              <input name='password' type="password" className="form-control" id="passwordInput" placeholder="********" onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordReinput" className="form-check-label" >Confirm Password</label>
              <input name='repassword' type="password" className="form-control" id="passwordReinput" placeholder="********" onChange={this.handleChange}/>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-dark">Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }




}



export default RegisterPage;