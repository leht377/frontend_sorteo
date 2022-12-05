import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/menu';

const Administrador = () => {
  const [user, setUser] = useState({});

  useState(() => {
    setUser(JSON.parse(window.localStorage.getItem('dataAdminlogged')));
  }, []);

  return (
    <>
      {user ? (
        <section>
          <NavBar />

          <div className="w-100 py-5">
            <Outlet />
          </div>
        </section>
      ) : (
        <h1>autenticate</h1>
      )}
    </>
  );
};

export default Administrador;
