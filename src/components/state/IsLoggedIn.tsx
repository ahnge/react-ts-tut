import React, { useState } from "react";

const IsLoggedIn = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <p>User is {isLoggedin ? "logged in" : "not logged in"}</p>
    </div>
  );
};

export default IsLoggedIn;
