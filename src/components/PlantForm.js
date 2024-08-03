// src/components/PlantForm.js
import React, { useState, useEffect } from 'react';

const PlantForm = ({ addPlant, updatePlant, currentPlant }) => {
    const [plant, setPlant] = useState({
        id: null,
        name: '',
        temperature: '',
        humidity: '',
        ph: ''
    });

    useEffect(() => {
        if (currentPlant) {
            setPlant(currentPlant);
        }
    }, [currentPlant]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlant({ ...plant, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (plant.id === null) {
            addPlant(plant);
        } else {
            updatePlant(plant);
        }
        setPlant({
            id: null,
            name: '',
            temperature: '',
            humidity: '',
            ph: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={plant.name}
                onChange={handleChange}
                placeholder="Nama Tanaman"
            />
            <input
                type="text"
                name="temperature"
                value={plant.temperature}
                onChange={handleChange}
                placeholder="Suhu (dalam °C)"
            />
            <input
                type="text"
                name="humidity"
                value={plant.humidity}
                onChange={handleChange}
                placeholder="Kelembaban (dalam %)"
            />
            <input
                type="text"
                name="ph"
                value={plant.ph}
                onChange={handleChange}
                placeholder="pH Tanah"
            />
            <button type="submit">{plant.id ? 'Perbarui' : 'Tambahkan'}</button>
        </form>
    );
};

export default PlantForm;
