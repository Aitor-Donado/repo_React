import { useState } from "react";
function BuscaCoctel({ buscarCocteles }) {
  const [ingrediente, setIngrediente] = useState("");
  const handleClick = (e) => {
    setIngrediente(e.target.dataset.ingredient);
    buscarCocteles(e.target.dataset.ingredient);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <i className="fas fa-search search-icon"></i>
            <input
              value={ingrediente}
              onChange={(e) => setIngrediente(e.target.value)}
              type="text"
              id="searchInput"
              placeholder="Ej: vodka, ron, tequila..."
            />
          </div>
          <button
            id="searchBtn"
            className="btn btn-primary col"
            onClick={() => buscarCocteles(ingrediente)}
          >
            <i className="fas fa-cocktail"></i>
            Buscar
          </button>
        </div>
        <div className="quick-tags">
          <span className="me-2">Prueba con:</span>
          <button
            onClick={handleClick}
            className="btn btn-outline-primary"
            data-ingredient="vodka"
          >
            vodka
          </button>
          <button
            onClick={handleClick}
            className="btn btn-outline-primary"
            data-ingredient="gin"
          >
            gin
          </button>
          <button
            onClick={handleClick}
            className="btn btn-outline-primary"
            data-ingredient="rum"
          >
            ron
          </button>
          <button
            onClick={handleClick}
            className="btn btn-outline-primary"
            data-ingredient="tequila"
          >
            tequila
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuscaCoctel;
