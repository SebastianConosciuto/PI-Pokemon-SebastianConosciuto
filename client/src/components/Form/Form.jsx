import { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  
const [selectedTypes, setSelectedTypes] = useState([]);


const handleTypeChange = (event) => {
  const options = event.target.options;

  const selectedValues = [];

  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selectedValues.push(options[i].value);
    }
  }

  setSelectedTypes(selectedTypes.concat(selectedValues));
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const newPokemon = {
    name: formData.name,
    image: formData.image,
    hp: formData.hp,
    attack: formData.attack,
    defense: formData.defense,
    speed: formData.speed,
    height: formData.height,
    weight: formData.weight,
    types: selectedTypes,
  };

  try {
    const response = await axios.post("http://localhost:3001/pokemons", newPokemon);

    if (response.status === 201) {
      console.log("Nuevo Pokémon creado con éxito:", response.data);
    }
  } catch (error) {
    console.error("Error al crear el Pokémon:", error);
  }
};
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: *</label>
        <input type="text" id="name" name="name" required onChange={handleInputChange} /><br /><br />

        <label htmlFor="image">Image URL: *</label>
        <input type="text" id="image" name="image" required onChange={handleInputChange} /><br /><br />

        <label htmlFor="hp">HP: *</label>
        <input type="number" id="hp" name="hp" required onChange={handleInputChange} /><br /><br />

        <label htmlFor="attack">Attack: *</label>
        <input type="number" id="attack" name="attack" required onChange={handleInputChange} /><br /><br />

        <label htmlFor="defense">Defense: *</label>
        <input type="number" id="defense" name="defense" required onChange={handleInputChange} /><br /><br />

        <label htmlFor="speed">Speed:</label>
        <input type="number" id="speed" name="speed" onChange={handleInputChange} /><br /><br />

        <label htmlFor="height">Height:</label>
        <input type="number" id="height" name="height" onChange={handleInputChange} /><br /><br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" onChange={handleInputChange} /><br /><br />

        <label htmlFor="type">Type:</label>
        <div> 
          <select id="type" multiple={true} onChange={handleTypeChange} value={selectedTypes}>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select><br /><br />
        </div>
        <div>
          <p>Seleccionado(s): {selectedTypes.join(", ")}</p>
        </div>

        <button type="submit">Crear Pokémon</button>
      </form>
    </div>
  );
};