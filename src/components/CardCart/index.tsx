import { Container } from "./styles";
import { IProductCart } from "../../interfaces";
import { useDispatch } from "react-redux";
import { removeCard, increase, decrease } from "../../features/productSlice";
import "animate.css";

const CardCart = ({ id, name, photo, price, amount }: IProductCart) => {
  const dispatch = useDispatch();

  return (
    <Container className="animate__animated animate__backInLeft">
      <img src={photo} alt="" />
      <p className="name-product">{name}</p>
      <div className="div-auxiliar-mobile">
        <div className="div-btns">
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeCard(id));
              }
              dispatch(decrease(id));
            }}
            className="btn-less"
          >
            -
          </button>
          <p className="qnt">{amount}</p>
          <button onClick={() => dispatch(increase(id))} className="btn-more">
            +
          </button>
        </div>
        <div className="div-price">
          <p className="text-price">R${price}</p>
        </div>
      </div>
      <div className="auxiliar">
        <span>Qtd:</span>
        <div className="div-btns">
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeCard(id));
              }
              dispatch(decrease(id));
            }}
            className="btn-less"
          >
            -
          </button>
          <p className="qnt">{amount}</p>
          <button onClick={() => dispatch(increase(id))} className="btn-more">
            +
          </button>
        </div>
      </div>
      <p className="price-product">R${price}</p>
      <button onClick={() => dispatch(removeCard(id))} className="delete">
        <p>x</p>
      </button>
    </Container>
  );
};

export default CardCart;
