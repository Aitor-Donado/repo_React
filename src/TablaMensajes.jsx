const TablaMensajes = ({ mensajes, onBorrarMensaje, onEditarMensaje }) => {
  return (
    <table className="table table-striped table-bordered table-hover table-responsive">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Contenido</th>
          <th>Fecha creación</th>
          <th>Fecha publicación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {mensajes.map((mensaje) => (
          <tr key={mensaje.id}>
            <td className="font-monospace">{mensaje.id}</td>
            <td className="fw-semibold">{mensaje.titulo}</td>
            <td>{mensaje.autor}</td>
            <td className="text-truncate" style={{ maxWidth: "200px" }}>
              {mensaje.contenido}
            </td>
            <td>{new Date(mensaje.fecha_creacion).toLocaleString()}</td>
            <td>
              {mensaje.fecha_publicacion ? (
                new Date(mensaje.fecha_publicacion).toLocaleString()
              ) : (
                <span className="text-muted">No modificada</span>
              )}
            </td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEditarMensaje(mensaje.id)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onBorrarMensaje(mensaje.id)}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaMensajes;
