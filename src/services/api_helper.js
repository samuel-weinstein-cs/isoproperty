import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:3001"
})

export const showListings = async () => {
    const resp = await api.get('/listings');
    return resp.data;
  }