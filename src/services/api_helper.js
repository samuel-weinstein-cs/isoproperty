import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001/"
})

export const getListings = async () => {
    const resp = await api.get('/listings');
    return resp.data;
  }

  export const getSingleListing = async (id) => {
    const resp = await api.get(`/listings/${id}`)
    return resp.data;
  }

  export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('id', resp.data.user.id )
    return resp.data.user;
  }

  export const verifyUser = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }