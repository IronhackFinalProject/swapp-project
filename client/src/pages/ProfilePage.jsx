import "../App.css";
//import Uploadimage from "../components/Uploadimage/Uploadimage";


function ProfilePage(props) {
  return (
    <div className="App">
    {console.log(props.user)}
      <h1>Welcome {props.user.username}</h1>
      <h2>Tu id de usuario es {props.user._id} y fue creado en la fecha {props.user.createdAt}. Tus lista de productos favoritos es: {props.user.favoritos}</h2>
    </div>
  );
}

export default ProfilePage;
