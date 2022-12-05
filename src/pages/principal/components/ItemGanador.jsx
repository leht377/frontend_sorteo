import moment from 'moment';
import { useEffect, useState } from 'react';
import SalaServices from '../../../services/Sala';
import BoletaServices from '../../../services/Boleta';

const ItemGanador = ({ sala }) => {
  const [estado, setEstado] = useState(sala.estado_sorteo);
  const [cedulaGanador, setCedulaGanador] = useState('xxxx xxxx');
  const [numeroGanador, setNumeroGanador] = useState('xxxx');

  const fechaActual = moment(moment().format('L'));
  const fechaSorteo = moment(sala.fecha_sorteo.replace('T00:00:00.000Z', ''));
  const diferenciaFecha = fechaSorteo.diff(fechaActual, 'day');

  const obtenerGanador = async () => {
    SalaServices.elegirGanador({ _id: sala._id })
      .then((res) => {
        if (res.Ganador === 'No hay ganador') {
          sala['numeroGanador'] = res.NumeroGanador;
          setCedulaGanador(res.Ganador);
        } else {
          let cedulaGanador = String(res.Ganador.cliente_id.cedula);
          let lenCedulaGanador = cedulaGanador.length;

          let cedula =
            'x'.repeat(lenCedulaGanador - 4) +
            ' ' +
            cedulaGanador.substring(lenCedulaGanador - 4);

          sala['boletaGanadora'] = res.Ganador._id;
          sala['numeroGanador'] = res.NumeroGanador;
          setCedulaGanador(cedula);
        }
        setNumeroGanador(res.NumeroGanador);
      })
      .finally((res) => {
        sala['estado_sorteo'] = 'finalizado';

        setEstado('finalizado');
      });
  };

  const comprobarTiempoSorteo = () => {
    console.log('comprobando');
    const horaSorteo = parseInt(sala.hora_sorteo.replace(':', ''));
    const horaActual = parseInt(
      moment(moment().format('HH:mm'))['_i'].replace(':', '')
    );

    if (diferenciaFecha === 0 && horaActual >= horaSorteo) {
      obtenerGanador();
    }
  };

  useEffect(() => {
    if (diferenciaFecha === 0 && estado === 'activo') {
      const llamarApi = setInterval(() => {
        comprobarTiempoSorteo();
      }, 30000);

      return () => clearInterval(llamarApi);
    }

    if (estado === 'finalizado' && sala.boletaGanadora) {
      BoletaServices.getById(sala.boletaGanadora).then((res) => {
        let cedulaGanador = String(res.cliente_id.cedula);
        let lenCedulaGanador = cedulaGanador.length;

        let cedula =
          'x'.repeat(lenCedulaGanador - 4) +
          ' ' +
          cedulaGanador.substring(lenCedulaGanador - 4);

        setCedulaGanador(cedula);
        setNumeroGanador(sala.numeroGanador);
      });
    } else if (estado === 'finalizado') {
      setCedulaGanador('No hay Ganador');
      setNumeroGanador(sala.numeroGanador);
    }
  }, [estado]);

  // const llamadoApi = setInterval(() => {
  //
  // }, 10000);

  return (
    <div
      className={`row fw-bold roundedd-flex align-items-center mt-1 p-2  rounded `}
      style={{ margin: 'auto', background: '#e8e79e' }}
    >
      <div className="col-8 d-flex flex-column">
        <span>
          Nombre: <span className="text-uppercase">{sala.nombre}</span>{' '}
        </span>
        <span>Fecha: {sala.fecha_sorteo.replace('T00:00:00.000Z', '')} </span>
        <span>Hora: {sala.hora_sorteo} </span>
      </div>
      <div className="col-4">
        <span className="w-100 text-center d-block">GANADOR</span>
        <div
          className="d-flex justify-content-center fs-4 align-items-center border border-dark rounded "
          style={{ width: '100%', height: '80px' }}
        >
          {numeroGanador}
        </div>
        <span className="w-100 text-center d-block">{cedulaGanador}</span>
      </div>
    </div>
  );
};

export default ItemGanador;
