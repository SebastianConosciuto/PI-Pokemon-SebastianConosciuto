import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { loadPokes } from '../../redux/actions';
import styles from './homeCards.module.css';
import { Card } from '../../atoms/Card/Card';
import nextIcon from '../../assets/next.svg'
import prevIcon from '../../assets/prev.svg'

const pokemons = [
    {
      "id": 1,
      "name": "bulbasaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "speed": 45,
      "height": 7,
      "weight": 69,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 2,
      "name": "ivysaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "speed": 60,
      "height": 10,
      "weight": 130,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 3,
      "name": "venusaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "speed": 80,
      "height": 20,
      "weight": 1000,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 4,
      "name": "charmander",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "speed": 65,
      "height": 6,
      "weight": 85,
      "types": [
        "fire"
      ]
    },
    {
      "id": 5,
      "name": "charmeleon",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "speed": 80,
      "height": 11,
      "weight": 190,
      "types": [
        "fire"
      ]
    },
    {
      "id": 6,
      "name": "charizard",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "speed": 100,
      "height": 17,
      "weight": 905,
      "types": [
        "fire",
        "flying"
      ]
    },
    {
      "id": 7,
      "name": "squirtle",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "speed": 43,
      "height": 5,
      "weight": 90,
      "types": [
        "water"
      ]
    },
    {
      "id": 8,
      "name": "wartortle",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "speed": 58,
      "height": 10,
      "weight": 225,
      "types": [
        "water"
      ]
    },
    {
      "id": 9,
      "name": "blastoise",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "speed": 78,
      "height": 16,
      "weight": 855,
      "types": [
        "water"
      ]
    },
    {
      "id": 10,
      "name": "caterpie",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "speed": 45,
      "height": 3,
      "weight": 29,
      "types": [
        "bug"
      ]
    },
    {
      "id": 11,
      "name": "metapod",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "speed": 30,
      "height": 7,
      "weight": 99,
      "types": [
        "bug"
      ]
    },
    {
      "id": 12,
      "name": "butterfree",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "speed": 70,
      "height": 11,
      "weight": 320,
      "types": [
        "bug",
        "flying"
      ]
    }
  ]

export const HomeCards = () => {

  // const dispatch = useDispatch();
  // const [aux, setAux] = useState()

  // useEffect(() => {
  //   dispatch(loadPokes())
  //   setAux(true)
  // }, [])
  
  return (
    <div className={styles.container}>
      <div className={styles.previous}>
        <img className={styles.arrow} src={prevIcon} alt="previuos page" />
      </div>
      <div className={styles.cardsContainer}>
        {
          pokemons?.map(pokemon => <Card pokemon={pokemon} />)
        }
      </div>
      <div className={styles.next}>
        <img className={styles.arrow} src={nextIcon} alt="next page" />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//       pokemons: state.pokemons
//   }
// }

// export default connect(
//   mapStateToProps,
//   null
// )(HomeCards)
