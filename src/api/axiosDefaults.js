import axios from "axios";

axios.defaults.baseURL = "https://moments-ci-ljc.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/from-data";
axios.defaults.withCredentials = true;
