import "../App.css";
import Form from '../components/Form/Form.jsx'
import UploadImage from '../components/Uploadimage/Uploadimage.jsx'


function createproduct({user}) {
  return (
    <div className="App">
      <Form user={user} />
      <UploadImage />
    </div>
  );
}

export default createproduct;
