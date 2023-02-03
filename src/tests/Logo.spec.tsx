import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo";

describe("Logo", () => {
  it("Should render correctly", () => {
    render(<Logo />);

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});
