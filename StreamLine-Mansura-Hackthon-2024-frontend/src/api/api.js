import axios from "axios";

 const api = axios.create({
   baseURL:
     "http://localhost:7294/api/AI/generate?prompt=I%20have%202000%20dollars%20and%20I%20am%20going%20to%20Egypt.%20Recommend%20places%20to%20visit%20in%20these%205%20days.",
 });
export default api;