import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("userid", res.data._id);

      window.location.href = `http://localhost:3000?token=${res.data.token}&username=${res.data.username}&userid=${res.data._id}`;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper text-center">
      <div className="login-left">
        <h1>Welcome back!</h1>
        <p>Log in to manage your investments & portfolio.</p>
        <img src="media/images/account_open.svg" style={{ width: "60%" }} alt="Zerodha style visual" />
      </div>

      <div className="login-right">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="terms">
          Don't have an account? <a href="/signup">Create one here</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
