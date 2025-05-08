import React from "react";
function LogIn({ logeador }) {
  const annadeUsuario = (e) => {
    e.preventDefault();
    console.log(e.target);
    const email = e.target.email.value;
    const edad = e.target.edad.value;
    console.log(email, parseInt(edad));
    logeador({ nombre: email, edad: parseInt(edad) });
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      <form onSubmit={annadeUsuario}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            aria-describedby="edadHelp"
          />
          <div id="edadHelp" className="form-text">
            Necesitamos saber si eres mayor de edad
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default LogIn;
