// src/components/PlantList.js
import React from 'react';
import Plant from './Plant';

const PlantList = ({ plants, editPlant, deletePlant }) => {
    return (
        <div>
            {plants.map((plant) => (
                <Plant
                    key={plant.id}
                    plant={plant}
                    editPlant={editPlant}
                    deletePlant={deletePlant}
                />
            ))}
        </div>
    );
};

export default PlantList;
