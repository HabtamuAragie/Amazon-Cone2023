import axios from "axios";
const instance = axios.create({
  baseURL: "https://ama-backend-production.up.railway.app/",
});
export default instance;
//
//https://us-central1-my-project--clone.cloudfunctions.net/api
