import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({ name: "nayzaw", email: "ahnge226@gmial.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <p>User name is: {user?.name}</p>
      <p>User email is: {user?.email}</p>
    </div>
  );
};

export default User;
