import React from 'react';
const {Users} = require('../../../../app/db/models')

function RegisterPage() {

  return(
    <div class="row justify-content-center">
      <div class="col-4">
        <form style="max-width: 500px; min-width: 300px">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username"/>
          </div>
    
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email"/>
          </div>
    
          <div class="mb-3">
            <label class="form-check-label" for="password">Password</label>
            <input type="password" class="form-control" id="password"/>
          </div>
    
          <button type="submit" class="btn btn-dark">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;