import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders This is my first try at a react app", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my first try at a react app/i);
  expect(linkElement).toBeInTheDocument();
});
