import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get("token");
  const urlUsername = params.get("username");
  const urlUserid = params.get("userid");

  if (urlToken) {
    localStorage.setItem("token", urlToken);
  }
  if (urlUsername) {
    localStorage.setItem("username", urlUsername);
  }
  if (urlUserid) {
    localStorage.setItem("userid", urlUserid);
  }

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "http://localhost:3000/Signup";

  }
}, []);

// login 

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/Signup";
  }
}, []);




  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
