import axios from 'axios';
const baseurl = 'http://localhost:3001/api/Boleta';

const getById = async (id) => {
  // const config = {
  //   headers: { Authorization: token },
  // };

  const response = await axios.get(baseurl + `/${id}`);
  return response.data;
};

const crear = async (BoletaNueva) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const response = await axios.post(baseurl, BoletaNueva);
  return response.data;
};
// eslint-disable-next-line
export default { crear, getById };
