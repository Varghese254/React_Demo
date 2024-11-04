import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: ''
    
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));//shallow copy of the previous data...
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name: 'default' });
  };

  return (
    <div className='div'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
      <h1>Sate Handling-{formData.name}</h1>
      <input type="text" name="name" value={formData.name} 
          onChange={handleInputChanges} />
      <button onChange={(event)=>handleSubmit(event)}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
