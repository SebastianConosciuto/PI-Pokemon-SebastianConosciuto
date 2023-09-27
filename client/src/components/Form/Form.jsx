import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadTypes } from "../../redux/actions";
import axios from "axios";
import validations from "./Validations";
import { Button } from "../../atoms/Button/Button";
import styles from "./form.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(loadTypes());
  }, []);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [errors, setErrors] = useState({});

  const handleTypeChange = (event) => {
    console.log(event);
    let selectedOptions = [...event.target.selectedOptions];
    const maxOptions = 1;
    if (selectedOptions.length > maxOptions) {
      event.target.options[
        selectedOptions[selectedOptions.length - 1].index
      ].selected = false;
    }
    selectedOptions = selectedOptions.map((opcion) => opcion.value);
    setFormData({
      ...formData,
      types: selectedOptions,
    });
    setErrors(
      validations({
        ...formData,
        types: selectedOptions,
      })
    );
    setSelectedTypes(selectedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons",
        formData
      );

      if (response.status === 201) {
        alert("New pokemon created succesfully", response.data);
      }
    } catch (error) {
      alert("Failed to create new pokemon", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(
      validations({
        ...formData,
        [name]: value,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Add to pokedex</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleInputChange}
        placeholder="*"
      />
      <div className={styles.error}>
        {errors.name && <span >{errors.name} </span>}
      </div>
      
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        required
        onChange={handleInputChange}
        placeholder="*"
      />
      <div className={styles.error}>
        {errors.image && <span >{errors.image} </span>}
      </div>
      
      <label htmlFor="hp">HP:</label>
      <input
        type="number"
        id="hp"
        name="hp"
        required
        onChange={handleInputChange}
        placeholder="*"
      />
      <div className={styles.error}>
        {errors.hp && <span >{errors.hp} </span>}
      </div>
      
      <label htmlFor="attack">Attack:</label>
      <input
        type="number"
        id="attack"
        name="attack"
        required
        onChange={handleInputChange}
        placeholder="*"
      />
      <div className={styles.error}>
        {errors.attack && <span >{errors.attack} </span>}
      </div>
      

      <label htmlFor="defense">Defense:</label>
      <input
        type="number"
        id="defense"
        name="defense"
        required
        onChange={handleInputChange}
        placeholder="*"
      />
      <div className={styles.error}>
        {errors.defense && <span >{errors.defense} </span>}
      </div>
      

      <label htmlFor="speed">Speed: </label>
      <input
        type="number"
        id="speed"
        name="speed"
        onChange={handleInputChange}
      />
      <div className={styles.error}>
        {errors.speed && <span >{errors.speed} </span>}
      </div>
      
      <label htmlFor="height">Height: </label>
      <input
        type="number"
        id="height"
        name="height"
        onChange={handleInputChange}
      />
      <div className={styles.error}>
        {errors.height && <span >{errors.height} </span>}
      </div>

      <label htmlFor="weight">Weight: </label>
      <input
        type="number"
        id="weight"
        name="weight"
        onChange={handleInputChange}
      />
      <div className={styles.error}>
        {errors.weight && <span >{errors.weight} </span>}
      </div>

      <label htmlFor="types">Type: </label>
      <div className={styles.types}>
        <select id="types" multiple={true} onChange={handleTypeChange} required>
          {types.map((tipo) => (
            <option value={tipo.name}>{tipo.name}</option>
          ))}
        </select>
        <div className={styles.error}>
          {errors.types && <span >{errors.types}</span>}
        </div>
      </div>
      <div>
        <p>Selected(s): {selectedTypes.join(", ")}</p>
      </div>
      <Button type={"terciary"} text={"create Pokemon"} cb={handleSubmit} />
    </form>
  );
};
