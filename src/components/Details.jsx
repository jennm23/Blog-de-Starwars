import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({ type }) => {
  const { uid } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
      const data = await response.json();
      setDetails(data.result.properties);
    };
    fetchDetails();
  }, [type, uid]);

  const getImageUrl = () => {
    if (type === "people") {
      return `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
    } else if (type === "planets") {
      return `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;
    } else if (type === "vehicles") {
      return `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`;
    }
  };

  return (
    details ? (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src={getImageUrl()} alt={details.name} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h1>{details.name}</h1>
            {type === "people" && (
              <>
                <p><strong>Año de nacimiento:</strong> {details.birth_year || 'Desconocido'}</p>
                <p><strong>Color de ojos:</strong> {details.eye_color || 'Desconocido'}</p>
                <p><strong>Género:</strong> {details.gender || 'Desconocido'}</p>
                <p><strong>Color de cabello:</strong> {details.hair_color || 'Desconocido'}</p>
                <p><strong>Altura:</strong> {details.height || 'Desconocido'} cm</p>
                <p><strong>Masa:</strong> {details.mass || 'Desconocido'} kg</p>
                <p><strong>Color de piel:</strong> {details.skin_color || 'Desconocido'}</p>
              </>
            )}
            {type === "planets" && (
              <>
                <p><strong>Clima:</strong> {details.climate || 'Desconocido'}</p>
                <p><strong>Gravedad:</strong> {details.gravity || 'Desconocido'}</p>
                <p><strong>Nombre del mundo:</strong> {details.name || 'Desconocido'}</p>
                <p><strong>Duración del año:</strong> {details.rotation_period || 'Desconocido'} horas</p>
                <p><strong>Población:</strong> {details.population || 'Desconocido'}</p>
                <p><strong>Terreno:</strong> {details.terrain || 'Desconocido'}</p>
              </>
            )}
            {type === "vehicles" && (
              <>
                <p><strong>Modelo:</strong> {details.model || 'Desconocido'}</p>
                <p><strong>Fabricante:</strong> {details.manufacturer || 'Desconocido'}</p>
                <p><strong>Costo:</strong> {details.cost_in_credits || 'Desconocido'} créditos</p>
                <p><strong>Capacidad de pasajeros:</strong> {details.passengers || 'Desconocido'}</p>
                <p><strong>Velocidad máxima:</strong> {details.max_atmosphering_speed || 'Desconocido'} km/h</p>
              </>
            )}
          </div>
        </div>
      </div>
    ) : (
      <p>Cargando...</p>
    )
  );
};

export default Details;



