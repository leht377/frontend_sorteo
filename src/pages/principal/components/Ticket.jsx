import { useEffect } from 'react';

const Ticket = ({
  nombreTicket,
  numeroTicket,
  precio,
  nombreSala,
  nombreSorteo,
}) => {
  useEffect(() => {}, [nombreTicket, numeroTicket]);
  return (
    <div
      className="container p-3 rounded shadow-sm "
      style={{ background: '#f9f8a7', fontFamily: ' Arvo' }}
    >
      <div className="" style={{ border: '2px dashed rgba(51, 51, 51, 0.5) ' }}>
        <header className="pt-2">
          <h4 className="text-center fw-bold">{nombreSorteo} </h4>
        </header>
        <section className="d-flex justify-content-evenly py-5 gap-2  border">
          <div className="text-center fw-bold ">
            TICKET N°
            <span className="d-block">
              {numeroTicket ? numeroTicket : 'xxxx '}
            </span>
          </div>
          <div className="text-center fw-bold text-capitalize text-wrap">
            NOMBRE
            <span className="d-block">
              {nombreTicket ? nombreTicket : 'xxxx xx'}
            </span>
          </div>
          <div className="text-center fw-bold">
            SALA
            <span className="d-block">{nombreSala}</span>
          </div>
        </section>
        <footer className="d-flex justify-content-end fw-bold px-2">
          TOTAL :{' '}
          <span className="ms-3">{`$ ${precio.toLocaleString('en')} `} </span>
        </footer>
      </div>
    </div>
    // <div class="box">
    //   <div class="inner">
    //     <h1>David Guetta tour 2012</h1>
    //     <div class="info clearfix">

    //       <div class="wp">
    //         Tickets N°<h2>1</h2>
    //       </div>
    //       <div class="wp">
    //         Nombre<h2>VIP</h2>
    //       </div>
    //       <div class="wp">
    //         Disc<h2>5%</h2>
    //       </div>
    //     </div>
    //     <div class="total clearfix">
    //       <span>Total :</span>
    //       <span> $ 2.000</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Ticket;
