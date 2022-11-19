import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>this is a custom component{props.name}</div>;
};

export default CustomComponent;
