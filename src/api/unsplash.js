import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID diQXPbwB_GkGZ3f06xDpU8bJMtTs8QCsXFy_dM7docc'
  }
});


