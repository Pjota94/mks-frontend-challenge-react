import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalValue } from "./features/productSlice";
import Dashboard from "./pages/Dashboard/Dashboard";
import { RootState } from "./store";
import Global from "./styles/global";

function App() {
  const { currentSale } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());
  }, [currentSale, dispatch]);

  return (
    <div className="App">
      <Global />
      <Dashboard />
    </div>
  );
}

export default App;
