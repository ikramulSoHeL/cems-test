import axios from "axios";

import { PRODUCTS_URL } from "../../utils/urls";

export const getProducts = async () => {
  return axios({
    method: "GET",
    url: PRODUCTS_URL,
  });
};
