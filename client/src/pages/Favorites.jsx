import "../App.css";
import Product from "../components/Product/Product"
import SearchShortcuts from "../components/SearchShortcuts/SearchShortcuts"

const favorites = (props) => {


  const filteredProducts = props.products.filter((product) => {
    return product._id == props.user.favoritos
    }
  )

  console.log(props.products[5]._id)
  console.log(props.user.favoritos)


  return (
    <div className="App">
      <h2>FAVORITES</h2>

      <div className="searchShortcuts">
          <SearchShortcuts handleSearch={props.requestProducts} /> 
      </div>

      {filteredProducts.map((product, index) => {
        return <Product key={index + product._id} user={props.user} product={product} />
      })}

    </div>
  );
}

export default favorites;
