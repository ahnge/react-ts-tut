import { useContext } from "react";
import { UserContext } from "./UserContext";
const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({ name: "nayzaw", email: "a@a.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};

export default User;
