import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, "data");
  };

  return (
    <div className='div'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder='Name' 
          value={formData.name} 
          onChange={handleInputChanges} 
          required 
        />
        <br/>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Email' 
          value={formData.email} 
          onChange={handleInputChanges} 
          required 
        />
        <br/>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder='Password' 
          value={formData.password} 
          onChange={handleInputChanges} 
          required 
        />
        <br/>
        <div className="button-container">
          <button type="submit" onChange={(event)=>handleSubmit(event)}>Register</button>&nbsp;
          <button type="button" >Cancel</button>
        </div>
        <br/>
      </form>
    </div>
  );
}

export default Register;
