import axios from 'axios';
const baseurl = 'http://localhost:3001/api/Sala';

const getSalasPorSorteo = async () => {
  const response = await axios.get(baseurl);
  return response.data;
};
const actualizar = async (id, salaActualizada) => {
  const response = await axios.put(baseurl + `/${id}`, salaActualizada);
  return response.data;
};
const elegirGanador = async (data) => {
  const response = await axios.post(baseurl + '/elegirGanador', data);
  return response.data;
};

const eliminar = async (id) => {
  const response = await axios.delete(baseurl + `/${id}`);
  return response;
};

const create = async (SalaNueva) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const response = await axios.post(baseurl, SalaNueva);
  return response.data;
};
// eslint-disable-next-line
export default {
  getSalasPorSorteo,
  create,
  actualizar,
  eliminar,
  elegirGanador,
};
