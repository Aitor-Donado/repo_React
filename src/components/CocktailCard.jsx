import React from "react";

const CocktailCard = ({ cocktail }) => {
  // Función optimizada para obtener ingredientes con medidas
  const getIngredientsWithMeasures = () => {
    return Array.from({ length: 15 }).map((_, i) => {
      const ingredient = cocktail[`strIngredient${i + 1}`];
      const measure = cocktail[`strMeasure${i + 1}`];

      if (!ingredient) return null;

      return (
        <tr key={i}>
          <td>{ingredient}</td>
          <td className="text-end fw-bold">
            {measure ? measure.trim() : "Al gusto"}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="row g-0">
        {/* Columna de la imagen */}
        <div className="col-md-4">
          <img
            src={
              cocktail.strDrinkThumb ||
              "https://via.placeholder.com/300x300?text=No+Image"
            }
            className="img-fluid rounded-start h-100 object-fit-cover"
            alt={cocktail.strDrink}
          />
        </div>

        {/* Columna del contenido */}
        <div className="col-md-8">
          <div className="card-body">
            {/* Encabezado */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h2 className="card-title">{cocktail.strDrink}</h2>
                <div className="d-flex gap-2 mb-2">
                  <span className="badge bg-primary">
                    {cocktail.strCategory}
                  </span>
                  <span className="badge bg-secondary">
                    {cocktail.strAlcoholic}
                  </span>
                </div>
                <p className="text-muted">
                  <i className="fas fa-martini-glass me-2"></i>
                  {cocktail.strGlass}
                </p>
              </div>
            </div>

            {/* Pestañas */}
            <ul className="nav nav-tabs mb-3" id="cocktailTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ingredients-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#ingredients${cocktail.idDrink}`}
                  type="button"
                  role="tab"
                >
                  <i className="fa-solid fa-circle-info me-1"></i>
                  Ingredientes
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="instructions-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#instructions${cocktail.idDrink}`}
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-list-ol me-1"></i>
                  Instrucciones
                </button>
              </li>
            </ul>

            <div className="tab-content" id="cocktailTabsContent">
              {/* Pestaña de ingredientes */}
              <div
                className="tab-pane fade show active"
                id={`ingredients${cocktail.idDrink}`}
                role="tabpanel"
                aria-labelledby="ingredients-tab"
              >
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Ingrediente</th>
                        <th scope="col" className="text-end">
                          Cantidad
                        </th>
                      </tr>
                    </thead>
                    <tbody>{getIngredientsWithMeasures()}</tbody>
                  </table>
                </div>
              </div>

              {/* Pestaña de instrucciones */}
              <div
                className="tab-pane fade"
                id={`instructions${cocktail.idDrink}`}
                role="tabpanel"
                aria-labelledby="instructions-tab"
              >
                {cocktail.strInstructionsES && (
                  <div className="mb-3">
                    <h5>
                      <i className="bi bi-translate me-2"></i>
                      Instrucciones en español:
                    </h5>
                    <p className="ps-3">{cocktail.strInstructionsES}</p>
                  </div>
                )}
                <div className="mb-3">
                  <h5>
                    <i className="bi bi-translate me-2"></i>
                    Instrucciones en inglés:
                  </h5>
                  <p className="ps-3">{cocktail.strInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
