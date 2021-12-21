// import Product from "../../../server/models/Product.model";
import "../App.css";
//import Uploadimage from "../components/Uploadimage/Uploadimage";
import avatar from "../components/SearchShortcuts/icons/avatar-369-456321.png"

import Actionbar from "./../components/Actionbar/Actionbar"
import "./ProfilePage.css"

function ProfilePage(props) {
  //  console.log(props.products)
  const filteredProducts = props.products.filter((product) => {
    return product.publishedBy === props.user._id;
  });
  console.log(filteredProducts);

  return (
    <div className="App">
      <div>
        <img className="avatarProfile" src={avatar} alt="avatarIcon" />
        </div>
        
        <div className="backCard">
        <h2>
          Welcome to your profile page, {props.user.name} {props.user.lastname}.
        </h2>

      <div className="usernameText">
        <h4>
          Username: <span className="propsUsername">{props.user.username}</span>
        </h4>
      </div>

      <div className="locationText">
        <h3>
          Location: <span className="propsCity">{props.user.city}</span>
        </h3>

        <div>
          <h4>
            Uploaded items: {props.user.products.length}
          </h4>
        </div>

        <div>
          <h4>Favorite items to Swapp: {props.user.favoritos.length} </h4>
        </div>

        <div>
          <p className="itemsOnSwapp">
            Current items available on Swapp: {props.products.length}
          </p>
        </div>

        <div className="signedUp">
          <p className="signedUpText">
            You are signed up since {props.user.createdAt.slice(0, 10)} at {props.user.createdAt.slice(11, 16)}
          </p>
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
