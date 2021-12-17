// import Product from "../../../server/models/Product.model";
import "../App.css";
//import Uploadimage from "../components/Uploadimage/Uploadimage";
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
      <h1>Welcome {props.user.username}</h1>
      <h2>Tu id de usuario es {props.user._id} y fue creado en la fecha {props.user.createdAt}. Tus lista de productos favoritos es: {props.user.favoritos}. En la app hay un total de {props.products.length} productos</h2>
      <Actionbar />
    </div>
  );
}

export default ProfilePage;
