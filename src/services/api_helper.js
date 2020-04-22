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

export const postListing = async (listingData) => {
  const resp = await api.post(`/listings/`, listingData);
  return resp;
}
export const putListing = async (id, listingData) => {
  const resp = await api.put(`/listings/${id}`, listingData);
  return resp;
}

export const postImage = async (listingId, file) => {
  const fileParts = file.name.split('.');
  const signedResponse = await api.post(`/listings/${listingId}/image/`, {
    fileName:fileParts[0],
    fileType:fileParts[1]
  })
  console.log(signedResponse);

  const options={
    headers: {
      'Content-Type': fileParts[1]
    }
  }
  await axios.put(signedResponse.data.request, file, options);
  console.log("File Uploaded");
  return signedResponse.data;
}

export const getListingImages = async (listingId) => {
  const resp = await api.get(`/listings/${listingId}/image/`);
  return resp.data.images;
}

export const loginUser = async (loginData) => {
  const resp = await api.post('/agents/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  localStorage.setItem('authToken', resp.data.token);
  localStorage.setItem('name', resp.data.agent.name);
  localStorage.setItem('id', resp.data.agent.id )
  return resp.data.user;
}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}
