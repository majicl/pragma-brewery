import axios from 'axios';

export default class HttpClient {
    static async get(url, options = {}) {
        return await axios.get(url, options);
    }
}
