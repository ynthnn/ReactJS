// src/App.js
import React, { useState } from 'react';
import PlantForm from './components/PlantForm';
import PlantList from './components/PlantList';
import './App.css';

const App = () => {
    const [plants, setPlants] = useState([]);
    const [currentPlant, setCurrentPlant] = useState(null);

    const addPlant = (plant) => {
        plant.id = plants.length ? plants[plants.length - 1].id + 1 : 1;
        setPlants([...plants, plant]);
    };

    const updatePlant = (updatedPlant) => {
        setPlants(
            plants.map((plant) => (plant.id === updatedPlant.id ? updatedPlant : plant))
        );
        setCurrentPlant(null);
    };

    const editPlant = (plant) => {
        setCurrentPlant(plant);
    };

    const deletePlant = (id) => {
        setPlants(plants.filter((plant) => plant.id !== id));
    };

    return (
        <div className="container">
            <h1>Pantau Kebunku</h1>
            <h5>#Talks To Your Plant</h5>
            <PlantForm
                addPlant={addPlant}
                updatePlant={updatePlant}
                currentPlant={currentPlant}
            />
            <PlantList
                plants={plants}
                editPlant={editPlant}
                deletePlant={deletePlant}
            />
        </div>
    );
};

export default App;

