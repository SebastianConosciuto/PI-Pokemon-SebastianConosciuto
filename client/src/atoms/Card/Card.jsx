import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadOnePoke } from '../../redux/actions'
import styles from './card.module.css'

const Card = ({ pokemon, loadOnePoke, detailPokemon }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (detailPokemon?.hasOwnProperty('id')) {
      navigate(`/detail/${detailPokemon.id}`, { replace: true })
    }
  }, [detailPokemon])

  const [name, setName] = useState('')

  const handleSubmit = () => {
    loadOnePoke(pokemon.name);
  }


  return (
    <div className={styles.container} onClick={handleSubmit}>
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

const mapStateToProps = (state) => {
  return ({
      detailPokemon: state.detailPokemon
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadOnePoke: (name) => { dispatch(loadOnePoke(name)) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
