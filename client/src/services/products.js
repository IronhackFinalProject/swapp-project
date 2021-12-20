import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const productService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/products`,
  headers: {
    Authorization: USER_HELPERS.getUserToken(),
  },
});

export function createProduct(product) {
    return productService
      .post("/create", product, {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        }
      })
  }

  export function deleteProduct(id) {
    return productService
      .delete(`/${id}`)
      .then(successStatus)
      .catch(internalServerError);
  }

  export function favProduct(id, cb) {
    return productService
      .post(`/favorites/${id}`, {}, {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        }
      })
      .then(() => {
        cb()
      })
      .catch(internalServerError);
  }


  export function deleteFav(id, cb) {
    return productService
      .patch(`/favorites/${id}`)
      .then(() => {
        cb()
      })
      .catch(internalServerError);
  }

  // GET - /api/products/favorites/:usedId  --> esta ya esxiste
  //Existe pero como POST
  //puedes tener varias iguales mientras el VERBO(GET/PATCH/DELETE/POST) no sea el mismo
  //cuando el cliente haga una llamada a la api (backend) a este endpoint (ruta backend)
  //Tendrás que hacer una query a la BBDD en la que te busque al usuario que coincida con userId
  //Y luego en la respuesta, tienes dos opciones, mandar el objeto entero de usuario, lo cual no tiene mucho sentido
  //ya que la ruta se llama products/favorites
  //y la opcion más lógica es que, una vez hayas recuperado ese user de la BBDD, enviar como respuesta soloo su campo favoritos
  //que será una array
  //res.status(200).json({favorites: userFromDB.favorites})  ....ok....
  
export function getfavoriteProducts(userId) {
  return productService
    .get(`/favorites/${userId}`)
    .then(successStatus)
    .catch(internalServerError);
}

// --------------------- DELETE FAVS TEST -----------------
// export function deleteFav() {
//   return productService
//   .get(`/favorites/${userId}`)
//   .then()
// }



export function getOneProduct(productId) {
  return productService.get(`/getOneProduct/${productId}`)
}

export function getProducts(query) {
  return axios.get(
    `${process.env.REACT_APP_SERVER_URL}${query ? `?search=${query}` : ""}`
  );
}
