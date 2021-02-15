import React, { useState, useEffect } from "react";
import "./cart.css";
import FoodArticle from "../pages/menu/article/FoodArticle";
import Button from "../Button";
import { Link } from "react-router-dom";

function Cart(props) {
  // svi prosledjeni proizvodi se smestaju u promenljivu fitems
  const [fitems, setItems] = useState(props.items);

  // svaki put kada se promeni props.items poziva se useEffect koji azurira promene
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  // prolazak kroz niz proizvoda dodatih u korpu
  const cartItems = () => {
    return fitems.map((item, index) => {
      return (
        <li key={index} className="cart-item">
          <i
            className="fas fa-times"
            onClick={() => props.removeItems(item.id)}
          ></i>
          {/* poziva se komponenta FoodArticle.js za prikaz svakog pojedinacnog proizvoda u korpi */}
          <FoodArticle
            name={item.name}
            url={item.image}
            price={item.price}
            cName="cart-article"
          />
        </li>
      );
    });
  };

  return (
    <div className="shopping-cart">
      <ul className="itemList">{cartItems()}</ul>
      <p className="total">Ukupno: {props.total}</p>
      <Link to="/pay">
        <Button>Naruči</Button>
      </Link>
    </div>
  );
}

export default Cart;
