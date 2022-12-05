import axios from 'axios';
const baseurl = 'http://localhost:3001/api/Cliente';

const crear = async (clienteNuevo) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const response = await axios.post(baseurl, clienteNuevo);
  return response.data;
};
// eslint-disable-next-line
export default { crear };
