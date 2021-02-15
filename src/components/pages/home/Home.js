import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Button from "../../Button";

export default function Home() {
  // promena naslova dokumenta pri otvaranju ove komponente
  useEffect(() => {
    document.title = "Flying Burger";
  }, []);

  return (
    <div className="main">
      <div className="homeWrapper">
        <h2 className="homeTitle">Dobrodošli u FlyingBurger! </h2>
        <p className="homeText">
          Ako niste videli Leteće Burgere do sada, naručite i uverite se da
          postoje!
        </p>
        <div className="buttonBlock">
          <p className="buttonText">Brza dostava. Veliki izbor hrane i pića.</p>
          <Link to="Menu">
            <Button>Meni</Button>
          </Link>
        </div>

        <p className="homeTextSpecial">FlyingBurger. Leti do vas.</p>
      </div>
    </div>
  );
}
