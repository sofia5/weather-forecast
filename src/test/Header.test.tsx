import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

test("renders header", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const headerText = screen.getByText(/Weather forecast/i);
  expect(headerText).toBeInTheDocument();
});
