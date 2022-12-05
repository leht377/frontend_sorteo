import { useState } from 'react';
import SalaServices from '../../../../services/Sala';

const Fila = ({
  sala,
  index,
  manejadorActulizarSala,
  manejadorEliminarSala,
}) => {
  const [nombre, setNombre] = useState(sala.nombre);
  const [precio, setPrecio] = useState('$' + sala.precio.toLocaleString('en'));
  const [fecha, setFecha] = useState(
    sala.fecha_sorteo.replace('T00:00:00.000Z', '')
  );
  const [hora, setHora] = useState(sala.hora_sorteo);
  const [editar, setEditar] = useState(false);

  const actualizarInformacion = () => {
    let precioLimpio = precio.replace('$', '').split(',').join('');
    console.log(precioLimpio);
    if (!isNaN(precioLimpio)) {
      const salaActualizada = {
        nombre: nombre,
        precio: precioLimpio,
        recaudado: sala.recaudado,
        fecha_sorteo: fecha,
        hora_sorteo: hora,
        asientos_disponibles: sala.asientos_disponibles,
      };

      SalaServices.actualizar(sala._id, salaActualizada).then((res) => {
        alert('Sala actualizada');
        manejadorActulizarSala(res);
        setEditar(!editar);
      });
    } else {
      alert('El precio debe ser un numero');
    }
  };

  const eliminarSala = () => {
    var answer = window.confirm('Quieres eliminar esta sala?');
    if (answer) {
      SalaServices.eliminar(sala._id)
        .then((res) => {
          alert('Sala eliminada');
          manejadorEliminarSala(sala._id);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <tr className="fw-bold">
      <th scope="row">{index + 1}</th>
      <td>
        <input
          className={
            editar ? '' : 'text-uppercase border-0 bg-transparent fw-bold'
          }
          type="text"
          value={nombre}
          onChange={({ target }) => setNombre(target.value)}
          disabled={!editar}
        />
      </td>
      <td>
        <input
          type="text"
          value={precio}
          className={
            editar ? '' : 'text-uppercase border-0 bg-transparent fw-bold'
          }
          onChange={({ target }) => setPrecio(target.value)}
          disabled={!editar}
        />
      </td>
      <td>
        <input
          type="date"
          value={fecha}
          className={
            editar ? '' : 'text-uppercase border-0 bg-transparent fw-bold'
          }
          onChange={({ target }) => setFecha(target.value)}
          disabled={!editar}
        />
      </td>
      <td>
        <input
          type="time"
          value={hora}
          className={
            editar ? '' : 'text-uppercase border-0 bg-transparent fw-bold'
          }
          onChange={({ target }) => setHora(target.value)}
          disabled={!editar}
        />
      </td>
      <td>{sala.asientos_disponibles}</td>
      <td>{'$' + sala.recaudado.toLocaleString('en')}</td>
      <td>
        <div className="d-flex gap-2">
          <button
            className="btn btn-info"
            onClick={() => setEditar(!editar)}
            hidden={editar}
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            hidden={editar}
            onClick={eliminarSala}
          >
            Eliminar
          </button>
          <button
            className="btn btn-success"
            hidden={!editar}
            onClick={actualizarInformacion}
          >
            Guardar
          </button>
          <button
            className="btn btn-danger"
            hidden={!editar}
            onClick={() => setEditar(!editar)}
          >
            Cancelar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Fila;
