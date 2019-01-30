import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

afterEach(cleanup);

describe("<Scoreboard />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("displays strikes", () => {
    const { getByTestId } = render(<Display />);
    const strikeDisplay = getByTestId(/strikedisplay/i);
    expect(strikeDisplay).toHaveTextContent("0");
  });
  it("displays balls", () => {
    const { getByTestId } = render(<Display />);
    const ballDisplay = getByTestId(/balldisplay/i);
    expect(ballDisplay).toHaveTextContent("0");
  });
  it("increments strikes when strike button is clicked", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId(/strikeButton/i);
    const strikeDisplay = getByTestId(/strikedisplay/i);

    fireEvent.click(strikeButton);

    expect(strikeDisplay).toHaveTextContent(/strikes: 1/i);
  });
  it("increments balls when ball button is clicked", () => {
    const { getByTestId } = render(<Display />);
    const ballButton = getByTestId(/ballButton/i);
    const ballDisplay = getByTestId(/balldisplay/i);

    fireEvent.click(ballButton);

    expect(ballDisplay).toHaveTextContent(/balls: 1/i);
  });
  it("resets strikes to 0 when strike 3 is reached", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId(/strikeButton/i);
    const strikeDisplay = getByTestId(/strikedisplay/i);

    fireEvent.click(strikeButton);
    expect(strikeDisplay).toHaveTextContent(/strikes: 1/i);
    fireEvent.click(strikeButton);
    expect(strikeDisplay).toHaveTextContent(/strikes: 2/i);
    fireEvent.click(strikeButton);
    expect(strikeDisplay).toHaveTextContent(/strikes: 0/i);
  });
  it("resets balls to 0 when ball 4 is reached", () => {
    const { getByTestId } = render(<Display />);
    const ballButton = getByTestId(/ballButton/i);
    const ballDisplay = getByTestId(/balldisplay/i);

    fireEvent.click(ballButton);
    expect(ballDisplay).toHaveTextContent(/balls: 1/i);
    fireEvent.click(ballButton);
    expect(ballDisplay).toHaveTextContent(/balls: 2/i);
    fireEvent.click(ballButton);
    expect(ballDisplay).toHaveTextContent(/balls: 3/i);
    fireEvent.click(ballButton);
    expect(ballDisplay).toHaveTextContent(/balls: 0/i);
  });
});
