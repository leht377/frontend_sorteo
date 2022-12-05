import { useEffect } from 'react';
import { useState } from 'react';
import FilaSkeleton from '../../../../components/FilaSkeleton';
import Fila from './Fila';
import TablaGanadores from './TablaGanadores';
import GanadorServices from '../../../../services/Ganadores';
const Ganadores = () => {
  const [ganadores, setGanadores] = useState([]);
  const [cargandoGanadores, setCargandoGanadores] = useState(true);

  useEffect(() => {
    GanadorServices.obtenerGanadores()
      .then((res) => {
        setGanadores(res);
        setCargandoGanadores(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="w-100 p-4">
      <h1 className="mb-4">GANADORES</h1>

      <TablaGanadores>
        {cargandoGanadores ? (
          <FilaSkeleton></FilaSkeleton>
        ) : (
          ganadores.map((ganador, index) => (
            <Fila key={ganador._id} index={index} ganador={ganador} />
          ))
        )}
      </TablaGanadores>
    </main>
  );
};

export default Ganadores;
