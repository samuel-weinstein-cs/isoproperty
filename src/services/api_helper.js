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
