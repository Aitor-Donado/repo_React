const MensajeForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">
          Título
        </label>
        <input type="text" className="form-control" id="titulo" />
      </div>
      <div className="mb-3">
        <label htmlFor="autor" className="form-label">
          Autor
        </label>
        <input type="text" className="form-control" id="autor" />
      </div>
      <div className="mb-3">
        <label htmlFor="contenido" className="form-label">
          Contenido
        </label>
        <textarea className="form-control" id="contenido" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
export default MensajeForm;
