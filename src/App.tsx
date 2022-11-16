import "./App.css";
import Counter from "./components/state/Counter";
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
      {/* <Greet name="Nayzaw" messageCount={20} isLoggedin={false} />
      <Person name={name} />
      <PersonList names={names} /> */}
      {/* <Greet name="Nayzaw" isLoggedin={true} />
      <Status status="success" />
      <Oscar>
        <Heading>And the oscar goes to me</Heading>
      </Oscar> */}
      {/* <Button
        handleClick={(e, number) => {
          console.log("button Clicked", e.target, number);
        }}
      /> */}
      {/* <Input
        value="Hello nayzaw"
        handleChange={(e) => console.log(`Hello ${e.target.value}`)}
      /> */}
      {/* <Container styles={{ padding: "1px", border: "1px solid black" }} /> */}
      {/* <User /> */}
      <Counter />
    </div>
  );
}

export default App;
