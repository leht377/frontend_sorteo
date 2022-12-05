import { useEffect } from 'react';
import SorteoServices from '../../../../services/Sorteo';

const TablaSorteo = ({ datasorteos = [], manejadorEstadoSorteo }) => {
  useEffect(() => {
    console.log('render');
  }, []);

  const cambiarEstado = (sorteoModificado) => {
    const nuevaDataSorteos = datasorteos.map((sorteo) => {
      if (sorteo._id === sorteoModificado._id) {
        return { ...sorteo, estado: sorteoModificado.estado };
      }
      return sorteo;
    });
    const DataSorteoOrdenada = nuevaDataSorteos.sort((a, b) => {
      return a.estado > b.estado ? 1 : -1;
    });
    manejadorEstadoSorteo(DataSorteoOrdenada);
  };

  const manejadorFormularioEstado = (event, id) => {
    event.preventDefault();
    SorteoServices.actualizarEstado(id)
      .then((respose) => {
        alert('Estado cambiado');
        cambiarEstado(respose.data);
      })
      .catch(({ status }) => {
        alert('No se pudo actualizar porque ya hay un sorteo activado');
      });
  };

  return (
    <div className="table-responsive text-nowrap">
      <table className="table table-striped  align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Estado</th>

            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {datasorteos.map((sorteo, index) => (
            <tr key={sorteo._id} className="fw-bold">
              <th scope="row">{index + 1}</th>
              <td className="text-uppercase">{sorteo.nombre}</td>
              <td className="">{sorteo.fecha.replace('T00:00:00.000Z', '')}</td>
              <td className="text-capitalize">{sorteo.estado}</td>
              <td className="">
                <div className="d-flex gap-2">
                  <form
                    onSubmit={(event) =>
                      manejadorFormularioEstado(event, sorteo._id)
                    }
                  >
                    <button
                      className={
                        sorteo.estado === 'activado'
                          ? 'btn btn-danger'
                          : 'btn btn-success'
                      }
                    >
                      {sorteo.estado === 'activado' ? 'Desactivar' : 'Activar'}
                    </button>
                  </form>
                  <form action="">
                    <button className="btn btn-info">Editar</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaSorteo;
