import React from "react";
import "./foodArticle.css";

// prikazuje jedan proizvod na osnovu prosledjenih vrednosti - props
export default function FoodArticle({ name, url, price, cName }) {
  return (
    // definise se izgled artikla u css na osnovu prosledjenih klasa (cName) pri pozivanju komponente
    <div className={cName}>
      <div className="foodImg">
        <img src={url} alt={name} />
      </div>
      <div className="foodDetails">
        <h3 className="foodName">{name}</h3>
        <h4 className="foodPrice">Cena: {price} RSD</h4>
      </div>
    </div>
  );
}
