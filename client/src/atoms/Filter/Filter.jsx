import React from "react";
import styles from "./filter.module.css";

export const Filter = () => {
  return (
    <div className={styles.container}>
      <div>
        <select name="tipo" id="tipo">

        </select>
      </div>
      <div>
        <select name="origen" id="origen">

        </select>
      </div>
      <div>
        <select name="alfabetico" id="alfabetico">

        </select>
      </div>
      <div>
        <select name="ataque" id="ataque">

        </select>
      </div>
    </div>
  );
};
