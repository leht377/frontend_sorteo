const Fila = ({ ganador, index }) => {
  return (
    <tr className="fw-bold">
      <th scope="row">{index + 1}</th>
      <td>{ganador.boleta_id.cliente_id.nombre}</td>
      <td>{ganador.boleta_id.cliente_id.cedula}</td>
      <td>{ganador.boleta_id.numero}</td>
      <td>{ganador.boleta_id.sorteo_id.nombre}</td>
      <td>{ganador.boleta_id.sala_id.nombre}</td>
      <td>{`$ ${ganador.boleta_id.valor_pagado.toLocaleString('en')}`}</td>
    </tr>
  );
};

export default Fila;
