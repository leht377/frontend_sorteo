import axios from 'axios';
const baseurl = 'http://localhost:3001/api/login';

// const fakeLogin = async (credenciales) => {
//   const response = await axios.get(baseurl);
//   const data = response.data;

//   return data;
// };

const login = async (credenciales) => {
  const response = await axios.post(baseurl, credenciales);
  return response.data;
};

// eslint-disable-next-line
export default { login };
