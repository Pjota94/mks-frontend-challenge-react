import { store } from "../store";

describe("Products redux state tests", () => {
  test("Should  initially set the products to an empty array.", () => {
    const state = store.getState().product;
    expect(state.currentSale).toEqual([]);
  });

  it("Should  initially set the quantity of products equal to 0.", () => {
    const state = store.getState().product;
    expect(state.amount).toEqual(0);
  });

  it("Should  initially set the total value of products equal to 0.", () => {
    const state = store.getState().product;
    expect(state.total).toEqual(0);
  });

  it("Verifica se produtos estão sendo listados.", () => {});
});
