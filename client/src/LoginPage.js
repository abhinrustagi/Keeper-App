import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login">
      <div className="Login__box">
        <h2>Google Keep</h2>
        <form>
          <div className="input_group">
            <label htmlFor="emailAddress">Email</label>
            <input type="email" name="emailAddress" id="emailAddress" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
