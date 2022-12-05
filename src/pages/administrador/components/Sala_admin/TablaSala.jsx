import { useEffect } from 'react';

const TablaSala = ({ children }) => {
  useEffect(() => {
    console.log('render');
  }, []);

  return (
    <>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped  align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio boleta</th>
              <th>Fecha </th>
              <th>Hora </th>
              <th>Asientos disponibles</th>
              <th>Recaudado</th>

              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablaSala;
