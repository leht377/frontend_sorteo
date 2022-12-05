import { useState } from 'react';
import loginServices from '../services/login';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [typeMsg, setTypeMsg] = useState(null);

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const dataUser = await loginServices.login({
        usuario: username,
        contrasena: password,
      });
      if (dataUser) {
        window.localStorage.setItem(
          'dataAdminlogged',
          JSON.stringify(dataUser)
        );
        navigate('/administrador');
      }
    } catch (error) {
      setMsg('wrong username or password ');
      setTypeMsg('error');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    }
  };

  return (
    <>
      <Alert msg={msg} type={typeMsg} />
      <form
        className="container-sm container-md mt-5"
        style={{ minWidth: '220px', maxWidth: '400px' }}
        onSubmit={handleLogin}
      >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresar Usuario"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresar Contraseña"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Ingresar</button>
        </div>

        <span>Usuario: admin </span>
        <br />
        <span>contreseña: admin</span>
      </form>
    </>
  );
};

export default Login;
