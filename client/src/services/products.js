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
      .post("/create", product)
      .then(successStatus)
      .catch(internalServerError);
  }

  export function deleteProduct(id) {
    return productService
      .delete(`/${id}`)
      .then(successStatus)
      .catch(internalServerError);
  }

  export function favoritesProduct(product) {
    return productService
      .post("/favorites", product)
      .then(successStatus)
      .catch(internalServerError);
  }


export function getProducts(query) {
  return axios.get(
    `${process.env.REACT_APP_SERVER_URL}${query ? `?search=${query}` : ""}`
  );
}
