const AcordeonItem = ({ encabezado, texto, identificador }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${identificador}`}
          aria-expanded="false"
          aria-controls={`collapse-${identificador}`}
        >
          {encabezado}
        </button>
      </h2>
      <div
        id={`collapse-${identificador}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{texto}</div>
      </div>
    </div>
  );
};

export default AcordeonItem;
