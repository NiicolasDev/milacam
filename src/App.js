import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Cart from 'components/cart/Cart';
import Home from 'pages/home/Home';
import Dogs from 'pages/dogs/Dogs';
import Cats from 'pages/cats/Cats';
import ProductDescrip from "pages/ProductDescription/ProductDescrip";
import Checkout from "pages/checkout/Checkout";

function App() {
  
  //LocalStorage
  let products = JSON.parse(localStorage.getItem('productsCart'));
  if(!products){
    products = [];
  }
  
  
  const { pathname } = useLocation();
  const [productsCart, setProductsCarts] = useState(products);
  const [productInformation, setProductInformation] = useState({});

  useEffect( () => {
    if(products){
      localStorage.setItem('productsCart', JSON.stringify(productsCart))
    }else{
      localStorage.setItem('productsCart', JSON.stringify([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsCart])

  return (
    <>
      {pathname !== "/checkout" && (<Header cartItems={productsCart.length} />)}
      <Cart products={productsCart} setProducts={setProductsCarts} />
      <Switch>
        <Route exact path="/">
          <Home 
          productsCart={productsCart}
          setProductsCarts={setProductsCarts}
          setProductInformation={setProductInformation}
           />
        </Route>
        <Route exact path="/perros">
          <Dogs
            productsCart={productsCart}
            setProductsCarts={setProductsCarts}
            setProductInformation={setProductInformation} />
        </Route>
        <Route exact path="/gatos">
          <Cats 
          productsCart={productsCart} 
          setProductsCarts={setProductsCarts}
          setProductInformation={setProductInformation}
          />
        </Route>
        <Route exact path="/producto/:id" >
          <ProductDescrip product={productInformation} />
        </Route>
        <Route exact path="/checkout">
          <Checkout products={productsCart} />
        </Route>
      </Switch>
      {pathname !== "/checkout" && (<Footer />)}
    </>
  );
}

export default App;
