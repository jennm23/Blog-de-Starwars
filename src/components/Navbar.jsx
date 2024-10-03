import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context";

const Navbar = () => {
  const { favorites, removeFavorite } = useAppContext();

  const handleRemoveFavorite = (uid) => {
    removeFavorite(uid);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StarWars</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favoritos ({favorites.length})
              </a>
              <ul className="dropdown-menu">
                {favorites.length > 0 ? (
                  favorites.map(item => (
                    <li key={item.uid} className="d-flex justify-content-between align-items-center">
                      <span className="dropdown-item">{item.name}</span>
                      <button 
                        className="btn btn-link text-danger" 
                        onClick={() => handleRemoveFavorite(item.uid)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item text-muted">No hay favoritos</span>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


