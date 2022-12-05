import axios from 'axios';
const baseurl = 'http://localhost:3001/api/Sorteo';

const getAll = async () => {
  const response = await axios.get(baseurl);
  return response.data;
};

const sorteoActivo = async () => {
  const response = await axios.get(baseurl + '/sorteoActivo');
  return response.data;
};

const actualizarEstado = async (id) => {
  const response = await axios.put(baseurl + `/cambiarEstado/${id}`);
  return response;
};

const create = async (SorteoNuevo) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const response = await axios.post(baseurl, SorteoNuevo);
  return response.data;
};
// eslint-disable-next-line
export default { getAll, create, actualizarEstado, sorteoActivo };
