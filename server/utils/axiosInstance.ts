import axios from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const jar = new CookieJar();
const headers = {
    "Content-Type" : 'application/json',
    "Accept": "application/json"
}
const baseUrl = 'https://online.bnovo.ru/'
const axiosInstance = wrapper(axios.create({jar, withCredentials: true, headers: headers, baseURL: baseUrl}));

export default axiosInstance