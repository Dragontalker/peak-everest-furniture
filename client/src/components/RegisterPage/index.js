import { useState } from 'react';

function RegisterPage() {

  const [state, setState] = useState({
      name: '',
      email: '',
      password: '',
      repassword: ''
    })

  function handleChange(event) {
    const {name, value} = event.target
    setState({
      ...state,
      [name]: value
    })
  }

  async function checkValidateEmail() {
    const {email} = state
    const data = await fetch('api/users').then(r => r.json())

    const existence = data.filter(user => user.email === email)
    if (existence.length > 0){
      alert("You are already registered")
      // sign in
    } else {
      const fetchOptions = {
        method: "POST",
        body: state,
        headers: {"Content-Type": "application/json"}
      }
      await fetch('api/users', fetchOptions)
    }

    console.log(existence)
    const regex = new RegExp('.+@.+\\..+')
  
    if (!regex.test(email)) {
      alert('Invalid email format')
      return false
    }
    return true
  }

  function checkValidatePassword() {
    const {password, repassword} = state
    if (password !== repassword) {
      alert("Password does not match")
      return false
    }
    return true
  }

  function submitForm(e) {
    e.preventDefault();
    console.log("attempting to sign up");
    if (!checkValidateEmail()) {
      return;
    }
    if (!checkValidatePassword()) {
      return;
    }

    console.log('form submited')
  }

  return(
    <div className="card mt-3 login-body">
      <div className="card-body">
        <h5 className="card-title mb-3">Sign Up</h5>
        <form onSubmit={(e) => submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="displayNameInput" className="form-label">Display name</label>
            <input name='name' type="text" className="form-control" id="displayNameInput" placeholder="name" onChange={handleChange} value={state.name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input name='email' type="email" className="form-control" id="emailInput" placeholder="name@example.com" onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-check-label" >Password</label>
            <input name='password' type="password" className="form-control" id="passwordInput" placeholder="********" onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordReinput" className="form-check-label" >Confirm Password</label>
            <input name='repassword' type="password" className="form-control" id="passwordReinput" placeholder="********" onChange={handleChange}/>
          </div>
          <div className="text-center mb-3">
            <button className="btn btn-dark">Register</button>
          </div>
        </form>
      </div>
    </div>
  )

}


// class RegisterPage extends Component {
//   // state
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     repassword: ''
//   }
//   // functions
//   handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   }

//   checkValidateEmail = () => {
//     const data = fetch('api/transactions').then(r => r.json())
//     console.log(data)


//     const {email} = this.state
//     const regex = new RegExp('.+@.+\\..+')
  
//     if (!regex.test(email)) {
//       alert('Invalid email format')
//       return false
//     }
//     return true
//   }

//   checkValidatePassword = () => {
//     const {password, repassword} = this.state
//     if (password !== repassword) {
//       alert("Password does not match")
//       return false
//     }
//     return true
//   }

//   submitForm = (e) => {
//     e.preventDefault();
//     console.log("attempting to sign up");
//     if (!this.checkValidateEmail()) {
//       return;
//     }
//     if (!this.checkValidatePassword()) {
//       return;
//     }

//     console.log('form submited')
//   }

//   // render
//   render() {
//     return(
//       <div className="card mt-3 login-body">
//         <div className="card-body">
//           <h5 className="card-title mb-3">Sign Up</h5>
//           <form onSubmit={(e) => this.submitForm(e)}>
//             <div className="mb-3">
//               <label htmlFor="displayNameInput" className="form-label">Display name</label>
//               <input name='name' type="text" className="form-control" id="displayNameInput" placeholder="name" onChange={this.handleChange}/>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="emailInput" className="form-label">Email</label>
//               <input name='email' type="email" className="form-control" id="emailInput" placeholder="name@example.com" onChange={this.handleChange}/>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="passwordInput" className="form-check-label" >Password</label>
//               <input name='password' type="password" className="form-control" id="passwordInput" placeholder="********" onChange={this.handleChange}/>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="passwordReinput" className="form-check-label" >Confirm Password</label>
//               <input name='repassword' type="password" className="form-control" id="passwordReinput" placeholder="********" onChange={this.handleChange}/>
//             </div>
//             <div className="text-center mb-3">
//               <button className="btn btn-dark">Register</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }




// }



export default RegisterPage;