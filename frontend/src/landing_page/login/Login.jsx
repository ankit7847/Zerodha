// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3002/api/auth/login", formData);

//       // Success response
//       alert(`Welcome ${res.data.user.name}`);

//       // Token ko localStorage mein save karo
//       localStorage.setItem("token", res.data.token);

//       // Baad mein yahan redirect bhi kara sakte ho
//       // window.location.href = "/dashboard";
//     } catch (err) {
//       alert(err.response.data.msg || "Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
