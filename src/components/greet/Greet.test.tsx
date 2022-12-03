import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("test greet component", () => {
  render(<Greet />);
  const ele = screen.getByText(/hello/i);
  expect(ele).toBeInTheDocument();
});

test("test greet component with props", () => {
  render(<Greet name="nayzaw" />);
  const ele = screen.getByText(/hello nayzaw/i);
  expect(ele).toBeInTheDocument();
});
