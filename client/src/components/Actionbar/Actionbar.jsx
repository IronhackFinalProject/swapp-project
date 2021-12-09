import React from "react";
import "./Actionbar.css"
import { HeartOutlined, HomeOutlined, MessageOutlined, PlusCircleOutlined, SmileOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
// import * as CONSTS from "../../utils/consts";

const Actionbar = (props) => {

    return(
<div className="actionbar">
{console.log(props.user)}
{props.user ? (
    <>
    <Link to={PATHS.HOMEPAGE} className="nav__projectName">
         <HomeOutlined className="homeicon"/>
      </Link>

      <Link to={PATHS.LOGINPAGE} className="nav__projectName">
      <HeartOutlined className="hearticon"/>
      </Link>

      <Link to={PATHS.LOGINPAGE} className="nav__projectName">
      <PlusCircleOutlined className="plusicon"/>
      </Link>

      <Link to={PATHS.CHATPROFILE} className="nav__projectName">
      <MessageOutlined className="messageicon"/>
      </Link>

      <Link to={PATHS.PROFILEPAGE} className="nav__projectName">
      <SmileOutlined className="smileicon"/>
      </Link>
</>

)  :  (

    <>
    <Link to={PATHS.HOMEPAGE} className="nav__projectName">
         <HomeOutlined className="homeicon"/>
      </Link>

      <Link to={PATHS.FAVORITES} className="nav__projectName">
         <HeartOutlined className="hearticon"/>
      </Link>

      <Link to={PATHS.CREATEPRODUCT} className="nav__projectName">
         <PlusCircleOutlined className="plusicon"/>
      </Link>

      <Link to={PATHS.LOGINPAGE} className="nav__projectName">
         <MessageOutlined className="homeicon"/>
      </Link>

      <Link to={PATHS.LOGINPAGE} className="nav__projectName">
         <SmileOutlined className="homeicon"/>
      </Link>

    </>
)}

</div>
    )
}

export default Actionbar