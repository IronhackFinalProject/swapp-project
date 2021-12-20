import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../../images/manitasLogo.png"
// import Searchbar from "../Searchbar/Searchbar";
// import Form from './components/Form/Form.jsx';

const Navbar = (props) => {

  function RefreshPage(){
    window.location.reload(true)
  }

  return (
    <nav>
    <button className="homeRefreshBtn" onClick={RefreshPage}><Link to={PATHS.HOMEPAGE} className="nav__projectName"><img className="logo" src={logo} alt="logo" />
        {/* {CONSTS.CAPITALIZED_APP} - created with IronLauncher */}
      </Link>
      {/* <Searchbar handleSearch={props.handleSearch} /> */}
      </button>

      <div className="nav__authLinks">
        {/* {console.log(props.user)} */}
        {props.user ? (
          <>
            <Link to={PATHS.MYPRODUCTS} className="authLink">
              My Products
            </Link>

            <Link to={PATHS.CREATEPRODUCT} className="authLink">
              Create Product
            </Link>

            <Link to={PATHS.PROFILEPAGE} className="authLink">
              My Profile
            </Link>

            <Link to={PATHS.FAVORITES} className="authLink">
              Favorites
            </Link>

            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
            {/* <Link to={PATHS.CREATEPRODUCT} className="authLink">
              Create Product
            </Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
