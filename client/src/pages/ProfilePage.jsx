import "../App.css";
import Uploadimage from "../components/Uploadimage/Uploadimage";


function ProfilePage(props) {
  return (
    <div className="App">
      <h1>Welcome {props.user.username}</h1>
      <h2>Profile Page</h2>
      <Uploadimage />
    </div>
  );
}

export default ProfilePage;
