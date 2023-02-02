import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IProduct } from "../../interfaces";
import api from "../../services/api";
import { Container } from "./styles";
import MainSkeleton from "../../components/MainSkeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/productSlice";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addItemCard = (product: any) => {
    dispatch(addCart(product));
  };

  return (
    <Container>
      <Header />
      <div className="list-products">
        <div className="div-cards">
          {loading && <MainSkeleton />}
          {products.map((product, index) => (
            <Card
              key={index}
              photo={product.photo}
              name={product.name}
              price={product.price}
              description={product.description}
              id={product.id}
              addItemCard={addItemCard}
              product={product}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Dashboard;
