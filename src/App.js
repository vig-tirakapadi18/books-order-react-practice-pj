import { useState } from "react";
import Header from "./components/Layout/Header";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
