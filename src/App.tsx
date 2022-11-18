import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
// import User from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Box from "./components/context/Box";
// import Counter from "./components/state/Counter";
// import Container from "./components/Container";
// import User from "./components/state/User";
// import Input from "./components/Input";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Status from "./components/Status";
// import Greet from "./components/Greet";
// import Button from "./components/Button";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";

function App() {
  // const name = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };
  // const names = [
  //   {
  //     first: "Bruce",
  //     last: "Wayhne",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  //   {
  //     first: "Cleark",
  //     last: "cankt",
  //   },
  // ];
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
