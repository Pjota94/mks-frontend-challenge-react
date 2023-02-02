import Logo from "../Logo";
import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const { amount } = useSelector((state: RootState) => state.product);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <Logo />
      <button onClick={showSidebar}>
        <FaShoppingCart />
        <span>{amount}</span>
      </button>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;
