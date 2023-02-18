import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_APIURL}`,
    headers: {
      ApiKey: `${process.env.REACT_APP_APIKEY}`,
    },
  });
};
