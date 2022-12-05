import { useEffect, useState } from 'react';
import TablaSala from './TablaSala';
import FormularioSala from './FormularioSala';
import SalaServices from '../../../../services/Sala';
import Fila from './Fila';
import FilaSkeleton from '../../../../components/FilaSkeleton';

const SalaAdmin = () => {
  const [salas, setSalas] = useState([]);

  const [cargandoSalas, setCargandoSals] = useState(true);

  useEffect(() => {
    SalaServices.getSalasPorSorteo()
      .then((res) => {
        setSalas(res);
      })
      .catch((error) => console.error(error))
      .finally(() => setCargandoSals(false));
  }, []);

  const manejadorDataSala = (nuevoSala) => {
    setSalas([...salas, nuevoSala]);
  };

  const manejadorActulizarSala = (salaActualizada) => {
    const listaSalasActualizada = salas.map((sala) => {
      if (sala._id === salaActualizada._id) return salaActualizada;
      return sala;
    });
    setSalas(listaSalasActualizada);
  };
  const manejadorEliminarSala = (id) => {
    const listaSalasActualizada = salas.filter((sala) => sala._id !== id);
    setSalas(listaSalasActualizada);
  };
  return (
    <main className="w-100 p-4">
      <h1 className="mb-4">Administrar Salas</h1>
      <FormularioSala manejadorDataSala={manejadorDataSala} />

      <TablaSala>
        {cargandoSalas ? (
          <FilaSkeleton></FilaSkeleton>
        ) : (
          salas.map((sala, index) => (
            <Fila
              key={sala._id}
              sala={sala}
              index={index}
              manejadorActulizarSala={manejadorActulizarSala}
              manejadorEliminarSala={manejadorEliminarSala}
            />
          ))
        )}
      </TablaSala>
    </main>
  );
};

export default SalaAdmin;
