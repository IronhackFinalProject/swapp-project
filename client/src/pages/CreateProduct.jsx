import "../App.css";
import Form from '../components/Form/Form.jsx'
import UploadImage from '../components/Uploadimage/Uploadimage.jsx'


function createproduct() {
  return (
    <div className="App">
      <Form />
      <UploadImage />
    </div>
  );
}

export default createproduct;
