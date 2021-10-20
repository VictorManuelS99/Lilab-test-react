import axios from "axios";

axios.defaults.baseURL = "https://dummyapi.io/data/v1";
axios.defaults.headers.common["app-id"] = "616f5d1e2bf766c68f81884c";

export default axios;
