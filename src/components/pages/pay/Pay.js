import React, { useState, useEffect } from "react";
import FoodArticle from "../menu/article/FoodArticle";
import Button from "../../Button";
import "./pay.css";

const Pay = (props) => {
  // promena naslova dokumenta pri otvaranju ove komponente
  useEffect(() => {
    document.title = "Narudzbina";
  }, []);

  // stateovi koji smestaju tekstualni input iz forme
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [adresa, setAdresa] = useState("");

  // state koji pokazuje JSX-u da li su ispravno uneti svi podaci
  const [greska, setGreska] = useState(false);

  // poziva se svaki put kada dodje do promene text inputa za ime
  const handleChangeIme = (e) => {
    setIme(e.target.value);
  };

  // poziva se svaki put kada dodje do promene text inputa za prezime
  const handleChangePrezime = (e) => {
    setPrezime(e.target.value);
  };

  // poziva se svaki put kada dodje do promene text inputa za adresu
  const handleChangeAdresa = (e) => {
    setAdresa(e.target.value);
  };

  // poziva se na submit forme
  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.items.length === 0) {
      alert(
        "Korpa je prazna, mozete se vratiti na meni da biste nastavili kupovinu."
      );
    }

    // ispituje da li su uneti podaci validni
    // ukoliko je prazan input ili sastavljen od razmaka
    if (!ime || !prezime || !adresa || /^\s*$/.test(ime, prezime, adresa)) {
      setGreska(true);
      return;
    } else {
      //poziva se funkcija prosledjena kroz props
      //vracaju se vrednosti iz forme - ime i prezime
      alert("Uspešno ste obavili plaćanje.\n Vaša hrana će stići ubrzo!");
      setIme("");
      setPrezime("");
      setAdresa("");
      setGreska(false);
      props.clearAll();
    }
  };

  return (
    // prvo se prikazuju svi podaci iz korpe
    <div className="pay-page">
      <div className="cart-items">
        {props.items.map((item, index) => {
          return (
            <li key={index} className="cart-item">
              <i
                className="fas fa-times"
                // svakom proizvodu se i ovde takodje prosledjuje funkcija ..
                // koja uklanja taj proizvod sa liste klikom na "+"
                onClick={() => props.removeItem(item.id)}
              ></i>
              <FoodArticle
                name={item.name}
                url={item.image}
                price={item.price}
                cName="pay-article"
              />
            </li>
          );
        })}
        <div className="total">Ukupno: {props.total} RSD</div>
      </div>
      <div className="form-container">
        {/* ako korisnik nije uclanjen u grupu ispisuje se forma na ekranu */}
        <form
          // menja se css klasa u zavisnosti od state-a greska
          className="form"
          onSubmit={handleSubmit}
        >
          <p>Prijava</p>
          {/* ukoliko nisu uneti validni podaci, ispisuje se sledeca poruka iznad inputa*/}
          {greska ? (
            <p className="error-message">Uneti podaci nisu validni</p>
          ) : (
            ""
          )}
          <>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Ime"
                value={ime}
                name="text"
                className="form-input"
                onChange={handleChangeIme}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Prezime"
                value={prezime}
                name="text"
                className="form-input"
                onChange={handleChangePrezime}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Adresa"
                value={adresa}
                name="text"
                className="form-input"
                onChange={handleChangeAdresa}
              />
            </div>
            <Button>Naruči</Button>
          </>
        </form>
      </div>
    </div>
  );
};

export default Pay;
