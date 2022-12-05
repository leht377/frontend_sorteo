import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import SorteoServices from '../../../../services/Sorteo';
const FormularioSorteo = ({ manejadorDataSorteo }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('dd/mm/aaaa');

  const [guardando, setGuardando] = useState(false);

  const manejadorFormularioSorteo = async (event) => {
    event.preventDefault();
    setGuardando(true);
    const sorteoNuevo = {
      nombre: nombre,
      fecha: fecha,
    };

    SorteoServices.create(sorteoNuevo)
      .then((res) => {
        alert('creado');
        manejadorDataSorteo(res);

        setFecha('dd/mm/aaaa');
        setNombre('');
      })
      .catch((error) => {
        alert(error);
        console.log(error);
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
        Crear Sorteo
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body mt-3">
          <form
            className=" "
            style={{ minWidth: '220px', maxWidth: '400px' }}
            onSubmit={manejadorFormularioSorteo}
          >
            <h3>SORTEO</h3>
            <div className="mb-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del sorteo"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
              />
            </div>
            <div className="mb-3">
              <label>FECHA</label>
              <input
                type="date"
                className="form-control"
                // value={fecha}
                onChange={({ target }) => setFecha(target.value)}
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

export default FormularioSorteo;
