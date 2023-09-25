import React from 'react'
import { connect } from 'react-redux'
import styles from './detailCards.module.css'

const DetailCard = ({ detailPokemon }) => {
  
  if (detailPokemon?.hasOwnProperty('id')) {
    return (
      <div>
        <div>
          <div>
            <h2>Name: {detailPokemon?.name}</h2>
            <h2>ID: {detailPokemon?.id}</h2>
            <h3>HP: {detailPokemon?.hp}</h3>
            <h3>Attack: {detailPokemon?.attack}</h3>
            <h3>Defense: {detailPokemon?.defense}</h3>
            <h3>Speed: {detailPokemon?.speed}</h3>
            <h3>Height: {detailPokemon?.height}</h3>
            <h3>Weight: {detailPokemon?.weight}</h3>
          </div>
          <div>
            <img src={detailPokemon?.image} alt="" />
          </div>
        </div>
      </div>
    )
  } else {
    return 'No esta este pokemon'
  }
  
}

const mapStateToProps = (state) => {
  return ({
      detailPokemon: state.detailPokemon
  })
}

export default connect(
  mapStateToProps,
  null
)(DetailCard)