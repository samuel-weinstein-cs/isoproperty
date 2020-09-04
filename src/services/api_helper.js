import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001/"
})

export const getAgents = async () => {
  const resp = await api.get('/agents');
  return resp.data.agents;
}

export const postAgent = async (agentData) => {
  const resp = await api.post('/agents');
  return resp.data;
}

export const putAgent = async (id,agentData) => {
  const resp = await api.put(`/agents/${id}`);
  return resp.data;
}

export const getListings = async () => {
  const resp = await api.get('/listings');
  return resp.data.listings;
}

export const getSingleListing = async (id) => {
  const resp = await api.get(`/listings/${id}`);
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

export const getAbout = async () => {
  const resp = await api.get(`/about`);
  return resp.data.text;
}

export const putAbout = async (text) => {
  const resp = await api.put(`/about`, {
    text
  });
  return resp.data.text;
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
  return resp.data.agent;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const resp = await api.get('/agents/verify');
      console.log(resp);
      return resp.data;
    } catch(e) {
      // console.error(e)
      api.defaults.headers.common.authorization = null;
      localStorage.removeItem('authToken');
    }

    return null;
  }
}
