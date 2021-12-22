// import Product from "../../../server/models/Product.model";
import "../App.css";
//import Uploadimage from "../components/Uploadimage/Uploadimage";
import avatar from "../components/SearchShortcuts/icons/avatar-369-456321.png"
import { PoweroffOutlined, EditOutlined } from "@ant-design/icons"; 
import Actionbar from "./../components/Actionbar/Actionbar"
import "./ProfilePage.css"
import * as PATHS from "../utils/paths";
import { Link } from "react-router-dom";
import { useEffect, useState} from 'react'
 
function ProfilePage(props) {


  //  console.log(props.products)
  // const filteredProducts = props.products.filter((product) => {
  //   return product.publishedBy === props.user._id;
  // });
  // console.log(filteredProducts);

  const [user, setUser] = useState({
    name: '',
    lastname: '',
    city: '',
    userProducts: [],
    username: '',
    favoritos: [],
    createdAt: ''
  })

  const {name, lastname, city, userProducts, username, favoritos, createdAt} = user

  useEffect(() => {

    setUser({
      name: props.user.user ? props.user.user.name : props.user.name,
      lastname: props.user.user ? props.user.user.lastname : props.user.lastname,
      city: props.user.user ? props.user.user.city : props.user.city,
      userProducts: props.user.user ? props.user.user.products : props.user.products,
      username: props.user.user ? props.user.user.username : props.user.username,
      favoritos: props.user.user ? props.user.user.favoritos : props.user.favoritos,
      createdAt: props.user.user ? props.user.user.createdAt : props.user.createdAt
    })
  }, [])

 

  return (
    <div className="App">
      <div>
        <img className="avatarProfile" src={avatar} alt="avatarIcon" />
      </div>

      <div className="backCard">
        <h2>
          Welcome to your profile page, {name} {lastname}.
        </h2>

        <div className="usernameText">
          <h4>
            Username:{" "}
            <span className="propsUsername">{username}</span>
          </h4>
        </div>

        <div className="locationText">
          <h3>
            Location: <span className="propsCity">{city}</span>
          </h3>

          <div>
            <h4>Uploaded items: {userProducts?.length}</h4>
          </div>

          <div>
            <h4>Favorite items to Swapp: {favoritos?.length} </h4> 
          </div>

          <div>
            <p className="itemsOnSwapp">
              Current items available on Swapp: {props.products.length}
            </p>
          </div>

          <div className="signedUp">
            <p className="signedUpText">
              You are signed up since {createdAt.slice(0, 10)} at{" "}
              {createdAt.slice(11, 16)}
            </p>
          </div>
        </div>

        <div className="profileBtnsWrapper">
          <div>
            <Link to={PATHS.EDITPROFILE} className="authorited">
              <button className="logOutBtn">
                Edit Profile
                <EditOutlined className="editIcon" />
              </button>
            </Link>
          </div>

          <div>
            <button className="logOutBtn" onClick={props.handleLogout}>
              Logout
              <PoweroffOutlined className="editIcon" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Actionbar />
      </div>
    </div>
  );
}

export default ProfilePage;
