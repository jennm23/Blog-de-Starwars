import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context";

const Card = ({ item, type }) => {
  const { favorites, addFavorite, removeFavorite } = useAppContext();
  const isFavorite = favorites.some(fav => fav.uid === item.uid);

  const handleFavorite = () => {
    isFavorite ? removeFavorite(item.uid) : addFavorite(item);
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link to={`/${type}/${item.uid}`} className="btn btn-primary m-2">Ver detalles</Link>
        <button className="btn btn-warning ml-2 m-2" onClick={handleFavorite}>
          <i className={`fa ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;

