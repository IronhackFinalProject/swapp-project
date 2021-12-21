import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import { getProducts } from "./services/products";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import Actionbar from "./components/Actionbar/Actionbar";

//Components
import Product from './components/Product/Product.jsx';
import ProductDetails from './pages/Product';
import Page404 from './pages/Page404';


import Form from './components/Form/Form.jsx';
import SearchShortcuts from "./components/SearchShortcuts/SearchShortcuts";
//import Uploadimage from "./components/Uploadimage/Uploadimage";

export default function App() {
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const requestProducts = useCallback((query) => {
    getProducts(query).then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products)
    });
  }, [])

  const reloadUser = () => {
    const accessToken = USER_HELPERS.getUserToken();

    if (!accessToken) {
      return setIsLoading(false);
    }

    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
  
      setUser(res.data.user);
      console.log(res.data.user.favoritos)
      requestProducts()
      setIsLoading(false);
    });
  }


  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();

    if (!accessToken) {
      return setIsLoading(false);
    }

    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });

    requestProducts();
  }, [requestProducts]);

  // console.log(products)

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar
        handleLogout={handleLogout}
        user={user}
        handleSearch={requestProducts}
      />
      <Routes>
        {routes({ user, authenticate, handleLogout, products, requestProducts, reloadUser }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        
        <Route path="/createproduct" element={<Form/>} />
        <Route path="/deleteproduct" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />

        <Route path="*" element={<Page404/>} />
      </Routes>
      <Actionbar />
    </div>
  );
}

//holaaaaaa2
