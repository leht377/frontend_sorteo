import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardSala = ({ handleModal, sala }) => {
  return (
    <Card
      style={{
        width: '18rem',
        flexGrow: 1,
        border: '2px dashed rgba(51, 51, 51, 0.5) ',
        background: '#f9f8a7',
        maxWidth: '420px',
      }}
    >
      <Card.Header className="text-uppercase d-flex justify-content-between fw-bold">
        <span>{sala.nombre}</span>
        <span>{`$ ${sala.precio.toLocaleString('en')}`}</span>
      </Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src="https://web.loteriadelmeta.gov.co/wp-content/uploads/2022/09/cropped-logo-oficial-PNG-04-3-1024x932.png"
        ></Card.Img>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          style={{
            background:
              'linear-gradient(0deg, rgba(235,224,52,1) 0%, rgba(253,125,45,1) 56%)',
          }}
          variant="warning"
          text={'dark'}
          className="fw-bold"
          onClick={() => handleModal(1)}
          disabled={sala.estado_sorteo === 'activo' ? false : true}
        >
          Comprar boleta
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Asientos disponibles {sala.asientos_disponibles}/50
        </small>
      </Card.Footer>
    </Card>
  );
};

export default CardSala;
