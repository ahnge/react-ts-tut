type ButtonProps = {
  varient: "primaty" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ varient, children, ...rest }: ButtonProps) => {
  return <div className={`${varient}`}>{children}</div>;
};

export default Button;
