import Header from "./components/header/header";
import Products from "./components/products/products";
import "../src/index.css";
import Showcase from "./components/showcase/showcase";
function App() {
  return (
    <div className="">
      <Header />
      <Showcase/>
      <Products />
    </div>
  );
}

export default App;
