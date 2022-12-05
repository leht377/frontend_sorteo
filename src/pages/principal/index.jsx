import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ModalRegistro from './components/ModalRegistro';
import CardSala from './components/CardSala';
import CarGanadores from './components/CardGanadores';
import SalaServices from '../../services/Sala';
import SorteoServices from '../../services/Sorteo';
const Sorteo = () => {
  const [salaSeleccionada, setSalaSeleccionada] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const [salas, setSalas] = useState([]);
  const [sorteo, setSorteo] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    SorteoServices.sorteoActivo()
      .then((dataSorteo) => {
        setSorteo(dataSorteo);
      })
      .catch((error) => console.log(error));

    SalaServices.getSalasPorSorteo()
      .then((dataSalas) => {
        setSalas(dataSalas);
      })
      .catch((error) => {
        if (error.response.status === 402) {
          navigate('/login');
        }
      });
  }, []);

  const mostrarModal = (sala) => {
    setSalaSeleccionada(sala);
    setModalShow(true);
  };

  return (
    <main className="container-xxl">
      <section className="row">
        <div className="col-12 py-3 d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-1 text-uppercase">{sorteo.nombre}</span>
          <Link to={'login'}>
            <Button
              style={{
                background: 'linear-gradient(to top, #EDC865, #F95A02)',
              }}
              variant="warning"
              text={'dark'}
              className="fw-bold"
            >
              Administrador
            </Button>
          </Link>
        </div>
        <div className="col-8 d-flex flex-wrap gap-1">
          {salas.map((sala) => (
            <CardSala
              sala={sala}
              handleModal={() => mostrarModal(sala)}
              key={sala._id}
            ></CardSala>
          ))}
        </div>
        <div className="col-4 ">
          <CarGanadores salas={salas} />
        </div>
      </section>

      <ModalRegistro
        sala={salaSeleccionada}
        nombreSorteo={sorteo.nombre}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </main>
  );
};

export default Sorteo;
