import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Navbar(props) {
  // state koji sluzi kao uslov za prikazivanje korpe
  const [cart, setCart] = useState(true);

  // funkcija koja se poziva na klik na ikonicu korpe
  const handleCart = () => {
    // true-false
    setCart(!cart);
  };

  return (
    <nav className="NavbarItems">
      <Link to="/" className="navbar-logo">
        <h1>
          FlyingBurger <i class="fas fa-hamburger"></i>
        </h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link className="nav-links" to="/">
            Pocetna
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/menu">
            Meni
          </Link>
        </li>
        {/* ikonica - korpa sa onClick funkcijom*/}
        <li className="shopping-bag" onClick={handleCart}>
          <i
            className={
              // ako je cart=true definise se drugaciji css
              cart ? "fas fa-shopping-bag clicked" : "fas fa-shopping-bag"
            }
          ></i>
        </li>
      </ul>
      {/* ako je cart=true prikazuje se korpa sa proizvodima
        poziva se komponenta Cart.js i prosledjuje joj se props
      */}
      {cart ? (
        <Cart
          items={props.items}
          removeItems={props.onclick}
          total={props.total}
        />
      ) : (
        ""
      )}
    </nav>
  );
}
export default Navbar;
