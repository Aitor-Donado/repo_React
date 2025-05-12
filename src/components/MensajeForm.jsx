import React, { useState, useEffect } from "react";

function MensajeForm({ handleNewMessage, mensajeEditando }) {
  const [titulo, setTitulo] = useState(mensajeEditando?.titulo || "");
  const [contenido, setContenido] = useState(mensajeEditando?.contenido || "");
  const [autor, setAutor] = useState(mensajeEditando?.autor || "");

  // Reiniciar formulario si cambia el mensaje a editar
  useEffect(() => {
    if (mensajeEditando) {
      setTitulo(mensajeEditando.titulo);
      setContenido(mensajeEditando.contenido);
      setAutor(mensajeEditando.autor);
    } else {
      setTitulo("");
      setContenido("");
      setAutor("");
    }
  }, [mensajeEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = "https://aitor.alwaysdata.net";
    let url;

    try {
      if (mensajeEditando) {
        // PUT: editar mensaje existente
        url = new URL(`${baseUrl}/listado/${mensajeEditando.id}`);
        url.searchParams.append("titulo", titulo);
        url.searchParams.append("contenido", contenido);
        if (autor) url.searchParams.append("autor", autor);

        console.log("Editando mensaje - URL:", url.toString());
      } else {
        // POST: nuevo mensaje
        url = new URL(`${baseUrl}/publicacion`);
        url.searchParams.append("titulo", titulo);
        url.searchParams.append("contenido", contenido);
        if (autor) url.searchParams.append("autor", autor);

        console.log("Creando mensaje - URL:", url.toString());
      }

      fetch(url, {
        method: mensajeEditando ? "PUT" : "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error HTTP: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Respuesta del servidor:", data);
          alert("✅ Mensaje enviado correctamente");
          setTitulo("");
          setContenido("");
          setAutor("");

          if (handleNewMessage) handleNewMessage();
        })
        .catch((error) => {
          console.error("❌ Error al enviar/actualizar mensaje:", error);
          alert("⚠️ Hubo un problema al enviar el mensaje. Revisa la consola.");
        });
    } catch (error) {
      console.error("❌ Error al construir la URL:", error);
      alert("⚠️ Dirección inválida. Comprueba la URL base.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      {mensajeEditando && (
        <input type="hidden" name="id" value={mensajeEditando.id} readOnly />
      )}

      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">
          Título*
        </label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contenido" className="form-label">
          Contenido*
        </label>
        <textarea
          className="form-control"
          id="contenido"
          rows="3"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="autor" className="form-label">
          Autor
        </label>
        <input
          type="text"
          className="form-control"
          id="autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {mensajeEditando ? "Actualizar Mensaje" : "Enviar Mensaje"}
      </button>
    </form>
  );
}

export default MensajeForm;
