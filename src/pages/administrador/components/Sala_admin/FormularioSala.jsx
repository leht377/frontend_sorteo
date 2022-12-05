import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import SalaServices from '../../../../services/Sala';
const FormularioSala = ({ manejadorDataSala }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const [precio, setPrecio] = useState(0);

  const [guardando, setGuardando] = useState(false);

  const manejadorFormularioSorteo = async (event) => {
    event.preventDefault();
    setGuardando(true);
    const SalaNueva = {
      nombre: nombre,
      precio: precio,
      fecha_sorteo: fecha,
      hora_sorteo: hora,
    };

    SalaServices.create(SalaNueva)
      .then((res) => {
        alert('Sala creada');
        manejadorDataSala(res);

        setPrecio(0);
        setNombre('');
        setFecha('');
        setHora('');
      })
      .catch((error) => {
        alert('No hay ningun sorteo activado');
      })
      .finally(() => setGuardando(false));
  };
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        CREAR SALA
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body mt-3">
          <form
            className=" "
            style={{ minWidth: '220px', maxWidth: '400px' }}
            onSubmit={manejadorFormularioSorteo}
          >
            <h3>REGISTRO SALA</h3>
            <div className="mb-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Nombre del sorteo"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Fecha sorteo</label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha del sorteo"
                required
                value={fecha}
                onChange={({ target }) => setFecha(target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Hora sorteo</label>
              <input
                type="time"
                required
                className="form-control"
                placeholder="Hora del sorteo"
                value={hora}
                onChange={({ target }) => setHora(target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Precio</label>
              <input
                type="number"
                className="form-control"
                placeholder="Precio de entrada"
                required
                value={precio}
                onChange={({ target }) => setPrecio(target.value)}
              />
            </div>

            <div className="d-grid">
              <Button variant="primary" type="submit" hidden={guardando}>
                CREAR
              </Button>
              <Button variant="primary" disabled hidden={!guardando}>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Guardando...
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioSala;
