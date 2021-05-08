import axios from "axios";
import config from "./axios.config.js";
// create an instance with the config
const instance = axios.create(config); //define interceptor
//add a request interceptor
instance.interceptors.request.use(
  function (config) {
    //do something before send request
    console.log(
      "%c-------------------- %caxios %c---------------------",
      "color:white",
      "color:#ADFF2F;font-size:15px;font-weight:800",
      "color:white"
    );
    console.log(
      "%c📧: %cREQUEST SEND %c(" + new Date().toLocaleTimeString() + ")",
      "color: #00CED1; font-weight:bold;font-size:15px",
      "color: yellow",
      "color: white"
    );
    console.log(
      "👇 %cThe following is the configuration of this request",
      "color:yellow"
    );
    console.dir(config);
    return config;
  },
  (error) => Promise.reject(error)
);
// add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // do something after receive response
    console.log(
      "%c📩: %cRESPONSE RECEIVED %c(" + new Date().toLocaleTimeString() + ")",
      "color: #00CED1; font-weight: bold;font-size:15px",
      "color: yellow",
      "color: white"
    );
    console.log(
      "👇 %cThe following is the result returned this time",
      "color:yellow"
    );
    console.dir(response); //     console.log(response);
    console.log(
      "%c-------------------- %caxios %c---------------------",
      "color:white",
      "color:#ADFF2F;font-size:15px;font-weight:800",
      "color:white"
    );
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default instance;
