import { useEffect, useState } from 'react';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ticket from './Ticket';

import ClienteServices from '../../../services/Cliente';
import BoletaServices from '../../../services/Boleta';

const ModalRegistro = ({ show, onHide, sala, nombreSorteo }) => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const [guardando, setGuardando] = useState(false);
  const [numeroTicket, setNumeroTicket] = useState('');

  useEffect(() => {
    setNombre('');
    setCedula('');
    setTelefono('');
    setCorreo('');
  }, [show]);

  const manejadorFormulario = async (event) => {
    event.preventDefault();
    const clienteNuevo = {
      nombre: nombre,
      cedula: cedula,
      correo: correo,
      telefono: telefono,
    };

    try {
      setGuardando(true);
      const clienteCreado = await ClienteServices.crear(clienteNuevo);

      const boletaNueva = {
        sala_id: sala._id,
        cliente_id: clienteCreado._id,
        sorteo_id: sala.sorteo_id,
        precio: sala.precio,
      };

      const boletaCreada = await BoletaServices.crear(boletaNueva);
      setNumeroTicket(boletaCreada.numero);
      sala['asientos_disponibles'] = sala['asientos_disponibles'] - 1;
      alert('COMPRADO');
    } catch (error) {
      console.log(error);
    } finally {
      setGuardando(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>REGISTRO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <Form className="col-5" onSubmit={manejadorFormulario}>
            <FloatingLabel label="Nombre completo" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
              />
            </FloatingLabel>

            <FloatingLabel label="Cedula" className="mb-3">
              <Form.Control
                type="number"
                min="1"
                placeholder="Cedula"
                value={cedula}
                onChange={({ target }) => setCedula(target.value)}
              />
            </FloatingLabel>

            <FloatingLabel label="Telefono" className="mb-3">
              <Form.Control
                type="number"
                min="1"
                placeholder="Telefono"
                value={telefono}
                onChange={({ target }) => setTelefono(target.value)}
              />
            </FloatingLabel>

            <FloatingLabel label="Correo" className="mb-3">
              <Form.Control
                type="email"
                min="1"
                placeholder="Correo"
                value={correo}
                onChange={({ target }) => setCorreo(target.value)}
              />
            </FloatingLabel>
            <div className="d-grid">
              <Button
                size="lg"
                style={{
                  background: 'linear-gradient(to top, #EDC865, #F95A02)',
                }}
                variant="warning"
                text={'dark'}
                className="fw-bold"
                type="submit"
                hidden={guardando}
              >
                Comprar
              </Button>

              <Button
                size="lg"
                style={{
                  background: 'linear-gradient(to top, #EDC865, #F95A02)',
                }}
                variant="warning"
                text={'dark'}
                className="fw-bold"
                disabled
                hidden={!guardando}
              >
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
          </Form>
          <div className="col-7">
            <Ticket
              numeroTicket={numeroTicket}
              nombreTicket={nombre}
              precio={sala.precio}
              nombreSala={sala.nombre}
              nombreSorteo={nombreSorteo}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalRegistro;
