import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! sembra che questa pagina non esista . Vuoi crearla tu ? </h1>
        <Link to="/">
          <button className="btn-primary">Ritorna alla home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
