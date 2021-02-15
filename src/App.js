import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import Pay from "./components/pages/pay/Pay";

function App() {
  // state u koji se smestaju proizvodi koji se nalaze u korpi
  // ovaj state se prosledjuje kao props u Cart.js (korpa) i Pay.js (stranica za procesuiranje narudzbine)
  const [items, setItems] = useState([]);

  // state koji racuna ukupnu cenu svih proizvoda u korpi
  const [total, setTotal] = useState(0);

  // useEffect koji se poziva svaki put kada se promeni state [items]
  useEffect(() => {
    let t = 0;

    // prolazi kroz niz proizvoda u korpi i racuna ukupnu senu
    items.map((item) => {
      t = t + parseInt(item.price);
    });
    setTotal(t);
  }, [items]);

  // state koji sluzi kao brojac i postavlja id proizvodima u korpi
  const [id, setId] = useState(0);

  // funkcija koja se prosledjuje u Menu.js
  // i odatle se poziva klikom na dugme "Dodaj u korpu" ispod svakog proizvoda
  // parametri predstavljaju vrednosti proizvoda koje se smestaju u korpu (Cart.js)
  const addItem = (name, price, url) => {
    // pomocna promenljiva u koju se smestaju vrednosti proizvoda
    let newItem = {
      id: id,
      name: name,
      price: price,
      image: url,
    };
    // povecava se brojac za id
    setId(id + 1);

    // novi proizvod se dodaje u items
    setItems([...items, newItem]);
  };

  // funkcija koja se prosledjuje u Cart.js i Pay.js
  // poziva klikom na ikonicu "x" ..
  // omogucava izbacivanje odredjenog proizvoda iz liste
  const removeItem = (id) => {
    // nova promenljiva u koju se filtriraju one vrednosti iz liste ..
    // koje nemaju isti id kao izabrani proizvod
    let newArray = items.filter((item) => item.id !== id);

    setItems([...newArray]);
  };

  // funkcija koja se prosledjuje u Pay.js a poziva se nakon uspesnog submita forme
  // vraca korpu u prvobitno stanje
  const clearAll = () => {
    let newArray = [];
    setItems([...newArray]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar items={items} total={total} onclick={removeItem} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Menu"
            render={(props) => <Menu items={items} onclick={addItem} />}
          />
          <Route
            path="/pay"
            render={(props) => (
              <Pay
                items={items}
                total={total}
                removeItem={removeItem}
                clearAll={clearAll}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
