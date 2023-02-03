import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Dashboard", () => {
  it("Check if the buy button exits", () => {
    render(
      <Card
        name={""}
        photo={""}
        price={""}
        description={""}
        id={undefined}
        addItemCard={undefined}
        product={undefined}
      />
    );

    const buttonComprar = screen.getByRole("button", { name: /COMPRAR/i });
    expect(buttonComprar).toBeInTheDocument();
  });
});
