import React from "react";
import { connect } from "react-redux";
import styles from "./detailCards.module.css";

const DetailCard = ({ detailPokemon }) => {

  if (detailPokemon?.hasOwnProperty("id")) {
    const typesClass = detailPokemon?.types ? detailPokemon?.types[0] : "";
    return (
      <div className={`${styles.container} ${styles[typesClass || 'default']}`}>
        <div className={styles.infoCont}>
          <div>
            <h2 className={styles.names}>Name: {detailPokemon?.name}</h2>
            <h2 className={styles.names}>ID: {detailPokemon?.id}</h2>
          </div>
          <div>
            <h3 className={styles.info}>HP: {detailPokemon?.hp}</h3>
            <h3 className={styles.info}>Attack: {detailPokemon?.attack}</h3>
            <h3 className={styles.info}>Defense: {detailPokemon?.defense}</h3>
            <h3 className={styles.info}>Speed: {detailPokemon?.speed}</h3>
            <h3 className={styles.info}>Height: {detailPokemon?.height}</h3>
            <h3 className={styles.info}>Weight: {detailPokemon?.weight}</h3>
          </div>
          <div className={styles.types}>
            {
              detailPokemon.types.map((type) => (
                <span className={styles.type}>{type.name ? type.name : type}</span>
              ))
            }
          </div>
        </div>
        <div className={styles.imgCont}>
          <img className={styles.image} src={detailPokemon?.image} alt="" />
        </div>
      </div>
    );
  } else {
    return "No esta este pokemon";
  }
};

const mapStateToProps = (state) => {
  return {
    detailPokemon: state.detailPokemon,
  };
};

export default connect(mapStateToProps, null)(DetailCard);
