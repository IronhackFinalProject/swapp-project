import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import { getProducts } from "./services/products";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import Actionbar from "./components/Actionbar/Actionbar";

//Components
// import Product from './components/Product/Product.jsx';
import Form from "./components/Form/Form.jsx";
//import Uploadimage from "./components/Uploadimage/Uploadimage";

export default function App() {
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function requestProducts(query) {
    getProducts(query).then((res) => {
      setProducts(res.data.products);
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
  }, []);

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
        {routes({ user, authenticate, handleLogout, products }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route path="/createproduct" element={<Form />} />
      </Routes>
      <Actionbar />
    </div>
  );
}

//holaaaaaa2
