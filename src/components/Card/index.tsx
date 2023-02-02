import { Container } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { IProduct } from "../../interfaces";

const Card = ({
  name,
  photo,
  price,
  description,
  id,
  addItemCard,
  product,
}: IProduct) => {
  return (
    <Container>
      <img src={photo} alt="" />
      <div>
        <p className="name-product">{name}</p>
        <div className="div-price">
          <p className="text-price">R${price}</p>
        </div>
      </div>
      <span>{description}</span>
      <button id={id} onClick={() => addItemCard(product)}>
        <FiShoppingBag />
        COMPRAR
      </button>
    </Container>
  );
};

export default Card;
