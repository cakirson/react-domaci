import React, { useEffect } from "react";
import "./menu.css";
import foodMenu from "./foodmenu.js";
import FoodArticle from "./article/FoodArticle";
import Button from "../../Button";

export default function Menu(props) {
  // promena naslova dokumenta pri otvaranju ove komponente
  useEffect(() => {
    document.title = "Meni";
  }, []);

  const food = () => {
    // prolazi se kroz niz proizvoda koji je definisan u foodmenu.js
    // ispisuje se svaki od tih proizvoda koriscenjem komponente FoodArticle
    return foodMenu.map((product, index) => {
      return (
        <div key={index} className="article-wrapper">
          <FoodArticle
            name={product.name}
            url={product.image}
            price={product.price}
            cName="article"
            onClick={() =>
              props.onclick(product.name, product.price, product.image)
            }
          />
          <Button
            onClick={() =>
              props.onclick(product.name, product.price, product.image)
            }
          >
            Dodaj u korpu <i className="fas fa-shopping-bag"></i>
          </Button>
        </div>
      );
    });
  };

  return (
    <div className="mainmenu">
      <div className="menuWrapper">{food()}</div>
    </div>
  );
}
