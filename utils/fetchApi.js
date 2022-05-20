import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '9af1d94a2bmsh8e4e6dd4c57d0d2p108bfdjsn56a966b22d7a',
    },
  });
    
  return data;
}