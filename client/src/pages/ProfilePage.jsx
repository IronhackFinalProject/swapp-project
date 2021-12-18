// import Product from "../../../server/models/Product.model";
import "../App.css";
//import Uploadimage from "../components/Uploadimage/Uploadimage";
import avatar from "../components/SearchShortcuts/icons/avatar-369-456321.png"

import Actionbar from "./../components/Actionbar/Actionbar"

function ProfilePage(props) {
//  console.log(props.products)
  const filteredProducts = props.products.filter((product) => {
    return product.publishedBy === props.user._id
    }
  )
  console.log(filteredProducts)

  return (
    <div className="App">
    {/* {console.log(props.user)} */}
      <h1>Welcome {props.user.name}</h1>
      <img src={avatar} alt="avatarIcon"/>
      <h2>Tu id de usuario es {props.user._id} y tu nombre de usuario es {props.user.username} e intercambias desde {props.user.city}. Creaste el usuario en {props.user.createdAt}. En la app hay un total de {props.products.length} productos. Tienes {props.user.products.length} productos subidos en SWAPP y {props.user.favoritos.length} productos en tu lista de favoritos.</h2>
    </div>
  );
}

export default ProfilePage;
