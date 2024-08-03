// src/components/Plant.js
import React from 'react';

const Plant = ({ plant, editPlant, deletePlant }) => {
    return (
        <div className="plant">
            <h3>{plant.name}</h3>
            <p>Suhu: {plant.temperature} °C</p>
            <p>Kelembaban: {plant.humidity} % </p>
            <p>pH Tanah: {plant.ph}</p>
            <button onClick={() => editPlant(plant)}>Ubah</button>
            <button onClick={() => deletePlant(plant.id)}>Hapus</button>
        </div>
    );
};

export default Plant;
