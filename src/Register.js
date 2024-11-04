import React from 'react'

function Register() {
  return (

    <div className='div'>
        <h1>REGISTRATION FORM</h1>
        <form method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <br/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <br/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <br/>
           <div class="button-container"> <button type="submit">Register</button>&nbsp;
            <button type="cancel">Cancel</button></div>
            <br/>
        </form>
    </div>
  )
}

export default Register