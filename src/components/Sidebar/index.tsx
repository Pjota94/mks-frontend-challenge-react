import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CardCart from "../CardCart";
import { Container } from "./styles";

const Sidebar = ({ active, sidebar }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  const { currentSale, total } = useSelector(
    (state: RootState) => state.product
  );

  return (
    <Container className="animate__animated animate__fadeInRight">
      <div className="header-sidebar">
        <p>Carrinho de compras</p>
        <button onClick={closeSidebar}>
          <span>x</span>
        </button>
      </div>
      <ul className="cards-cart">
        {currentSale.map((product, index) => (
          <CardCart
            key={index}
            photo={product.photo}
            name={product.name}
            id={product.id}
            price={product.price}
            amount={product.amount}
          />
        ))}
      </ul>
      <div className="div-total">
        <p className="total">Total:</p>
        <p className="price-total">R${total}</p>
      </div>
      <button className="btn-buy">Finalizar Compra</button>
    </Container>
  );
};

export default Sidebar;
