import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import MyProducts from "../pages/MyProducts";
import Product from "../pages/Product";
import SearchResults from "../pages/SearchResults";
import CreateProduct from "../pages/CreateProduct";
import EditProfile from "../pages/EditProfile";
import Favorites from "../pages/Favorites";
import ChatProfile from "../pages/ChatProfile";
import ProfilePage from "../pages/ProfilePage";

import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.PRODUCT,
      element: <Product {...props} />,
    },
    {
      path: PATHS.SEARCHRESULTS,
      element: <SearchResults {...props} />,
    },
    {
      path: PATHS.CREATEPRODUCT,
      element: user ? (
        <CreateProduct {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.EDITPROFILE,
      element: <EditProfile {...props} />,
    },
    {
      path: PATHS.FAVORITES,
      element: user ? (
        <Favorites {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.CHATPROFILE,
      element: user ? (
      <ChatProfile {...props} />
      ):( <Navigate to={PATHS.LOGINPAGE} replace />
        ),
    },
    {
      path: PATHS.PROFILEPAGE,
      element: user ? (
      <ProfilePage {...props} />
      ):( <Navigate to={PATHS.LOGINPAGE} replace />
        ),
    },
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.MYPRODUCTS,
      element: user ? (
        <MyProducts {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
