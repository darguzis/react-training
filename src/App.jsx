import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <JSXRules />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
