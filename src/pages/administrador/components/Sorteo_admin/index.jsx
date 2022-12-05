import { useEffect, useState } from 'react';
import SorteoServices from '../../../../services/Sorteo';
import FormularioSorteo from './FormularioSorteo';
import TablaSorteo from './TablaSorteo';

const SorteoAdmin = () => {
  const [sorteos, setSorteos] = useState([]);

  useEffect(() => {
    SorteoServices.getAll().then((res) => {
      setSorteos(res);
    });
  }, []);

  const manejadorDataSorteo = (nuevoSorteo) => {
    setSorteos([...sorteos, nuevoSorteo]);
  };

  const manejadorEstadoSorteo = (dataSorteos) => {
    setSorteos(dataSorteos);
  };

  return (
    <main className="w-100 p-4">
      <h1 className="mb-4">Administrar Sorteos </h1>
      <FormularioSorteo manejadorDataSorteo={manejadorDataSorteo} />
      <TablaSorteo
        datasorteos={sorteos}
        manejadorEstadoSorteo={manejadorEstadoSorteo}
      />
    </main>
  );
};

export default SorteoAdmin;
