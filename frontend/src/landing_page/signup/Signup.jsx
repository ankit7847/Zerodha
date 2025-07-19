import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
   console.log("✅ Form Submitted"); // 👈 Yeh add karo
  console.log("✅ FormData:", formData); // ✅ yeh add karo
  try {
    const res = await axios.post("http://localhost:3002/api/auth/register", formData);
    console.log("✅ Server Response:", res.data); // ✅ yeh bhi add karo

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    localStorage.setItem("userid", res.data._id);

    console.log("✅ Username Saved:", localStorage.getItem("username"));

    window.location.href = `http://localhost:3000?token=${res.data.token}&username=${res.data.username}&userid=${res.data._id}`;



  } catch (err) {
    console.log("❌ Error:", err);
    alert(err.response?.data?.message || "Error");
  }
};



  return (
    <div className="signup-wrapper text-center">
      <div className="signup-left">
        <h1>Open a free demat and trading account online</h1>
        <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        <img src="media\images\account_open.svg" style={{width:"60%"}} alt="Zerodha style visual" />
      </div>

      <div className="signup-right">
        <h2>Signup now</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p className="terms">By proceeding, you agree to the Zerodha terms & privacy policy.</p>
      </div>
    </div>
  );
}

export default Signup;
