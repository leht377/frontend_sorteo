import { useEffect } from 'react';

const TablaGanadores = ({ children }) => {
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
              <th>Cedula</th>
              <th>Numero</th>
              <th>Sorteo </th>
              <th>Sala</th>
              <th>Valor Pagado</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablaGanadores;
