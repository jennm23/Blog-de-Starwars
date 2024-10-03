import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async (type, setState) => {
      const response = await fetch(`https://www.swapi.tech/api/${type}`);
      const data = await response.json();
      setState(data.results);
    };
    fetchData("people", setPeople);
    fetchData("planets", setPlanets);
    fetchData("vehicles", setVehicles);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Personajes</h2>
      <div className="d-flex flex-wrap">
        {people.map(person => <Card key={person.uid} item={person} type="characters" />)}
      </div>

      <h2 className="mt-5">Planetas</h2>
      <div className="d-flex flex-wrap">
        {planets.map(planet => <Card key={planet.uid} item={planet} type="planets" />)}
      </div>

      <h2 className="mt-5">Vehículos</h2>
      <div className="d-flex flex-wrap">
        {vehicles.map(vehicle => <Card key={vehicle.uid} item={vehicle} type="vehicles" />)}
      </div>
    </div>
  );
};

export default Home;
