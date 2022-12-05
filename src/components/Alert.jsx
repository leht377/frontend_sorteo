const Alert = ({ msg, type }) => {
  let styleMsg = '';
  switch (type) {
    case 'error':
      styleMsg = 'alert-danger';
      break;
    case 'success':
      styleMsg = 'alert-success';
      break;
    case 'waiting':
      styleMsg = 'alert-info';
      break;
    default:
      break;
  }

  if (msg == null) {
    return null;
  } else {
    return (
      <div
        className={`alert ${styleMsg} d-flex align-items-center`}
        role="alert"
      >
        <div>
          {type === 'waiting' ? (
            <div className="d-flex align-items-center">
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="mx-3 fw-bold">{msg}</span>
            </div>
          ) : (
            <span className="mx-3 fw-bold">{msg}</span>
          )}
        </div>
      </div>
    );
  }
};

export default Alert;
