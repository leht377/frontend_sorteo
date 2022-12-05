import NavBarItem from './NavBarItem';

const NavBar = () => {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h4 className="navbar-brand">Administrador</h4>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Administrador
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <NavBarItem texto={'Administrar Sorteos'} ruta={'sorteo_admin'} />
              <NavBarItem texto={'Administrar Salas'} ruta={'sala_admin'} />
              <NavBarItem texto={'Ganadores'} ruta={'ganadores'} />
              <NavBarItem texto={'Salir'} ruta={'/'} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
