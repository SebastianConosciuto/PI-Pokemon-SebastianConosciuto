import React from "react";
import styles from './card.module.css'

export const Card = ({ pokemon }) => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <h1>{pokemon.name}</h1>
            {
                pokemon.types.map((type, index) => (
                    <span key={index + type}>{type}</span>
                ))
            }
        </div>
        <img className={styles.img} src={pokemon.image} alt={pokemon.name} />
    </div>
  )
};
