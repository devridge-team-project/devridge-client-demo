import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { contents } from "document/sign-up/platform";
import SignUp from "../components/sign-up/view/SignUp";

describe("SignUp Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>,
    );
  });

  it("renders without crashing", () => {
    const titleElement = screen.getByText("회원가입 방식");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders additional UI elements", () => {
    const additionalText = screen.getByText("또는");
    expect(additionalText).toBeInTheDocument();
  });
});
