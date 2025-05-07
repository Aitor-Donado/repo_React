import React from "react";
const CocktailCard = ({ cocktail }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="img-fluid"
            />
          </div>
          <div className="col-8">
            <h5 className="card-title">{cocktail.strDrink}</h5>
            <p className="card-text">{cocktail.strInstructionsES}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CocktailCard;
