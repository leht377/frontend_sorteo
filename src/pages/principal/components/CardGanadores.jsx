import { Card } from 'react-bootstrap';
import ItemGanador from './ItemGanador';

const CarGanadores = ({ salas = [] }) => {
  return (
    <Card
      style={{
        width: '100%',
        minHeight: '510px',
        flexGrow: 1,
        border: '2px dashed rgba(51, 51, 51, 0.5) ',
        background: '#f9f8a7',
      }}
    >
      <Card.Body className="px-2">
        <h1 className="fw-bold text-center mb-3">SORTEOS</h1>
        {salas.map((sala) => (
          <ItemGanador key={sala._id} sala={sala} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default CarGanadores;
