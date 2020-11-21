import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);
  if (loading) {
    return <Loading></Loading>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Nessun cocktail trovato per i tuoi parametri di ricerca
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          // console.log(cocktail);
          return <Cocktail key={cocktail.id} {...cocktail}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
