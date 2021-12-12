import "../App.css";
import Product from '../components/Product/Product'
import Searchbar from "../components/Searchbar/Searchbar";

function HomePage(props) {
  return (
    <div className="App">
      <h1>Welcome to swaap</h1>    
      {props.products.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}
    </div>
  );
}

export default HomePage;
