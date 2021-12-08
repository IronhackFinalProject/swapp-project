import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import ProductFile from "../pages/ProductFile";
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
      path: PATHS.PRODUCTFILE,
      element: <ProductFile {...props} />,
    },
    {
      path: PATHS.SEARCHRESULTS,
      element: <SearchResults {...props} />,
    },
    {
      path: PATHS.CREATEPRODUCT,
      element: <CreateProduct {...props} />,
    },
    {
      path: PATHS.EDITPROFILE,
      element: <EditProfile {...props} />,
    },
    {
      path: PATHS.FAVORITES,
      element: <Favorites {...props} />,
    },
    {
      path: PATHS.CHATPROFILE,
      element: <ChatProfile {...props} />,
    },
    {
      path: PATHS.PROFILEPAGE,
      element: <ProfilePage {...props} />,
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
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
