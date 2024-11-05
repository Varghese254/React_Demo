import React, { useState } from 'react';

function LoginPage() {
  return (
    <div className="div">
      <h2>Sign in</h2>
      <form>
        <label>Email or mobile phone number</label>
        <input type="text" name="name" />
        <div className="button-container">
          <button type="button">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
    