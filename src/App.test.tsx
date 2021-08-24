import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app links", () => {
  render(<App />);

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/learn esbuild/i)).toBeInTheDocument();
  expect(screen.getByText(/leonardo bravo/i)).toBeInTheDocument();
});
