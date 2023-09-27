import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPokes } from '../../redux/actions';
import styles from './homeCards.module.css';
import Card from '../../atoms/Card/Card';
import nextIcon from '../../assets/next.svg'
import prevIcon from '../../assets/prev.svg'
 
const HomeCards = ({ pokemons, nextPage, prevPage, offset, offsetDatabase, loadPokes, typeSelected, origin, order, loadingPokes }) => {
  useEffect(() => {
    loadPokes(offset, offsetDatabase, typeSelected, origin, order)
  }, [typeSelected, origin, order])

  const moveNext = () => {
    loadPokes(nextPage, offsetDatabase, typeSelected, origin, order)
  }

  const movePrev = () => {
    loadPokes(prevPage, offsetDatabase, typeSelected, origin, order)
  }
  
  return loadingPokes ? (
      <span className={styles.loader}></span>
    ) : (
      <div className={styles.container}>
        {
          offset > 1 && (
            <div onClick={movePrev} className={styles.previous}>
              <img className={styles.arrow} src={prevIcon} alt="previuos page" />
            </div>
          )
        }
        <div className={styles.cardsContainer}>
          {
            pokemons?.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)
          }
        </div>
        <div onClick={moveNext} className={styles.next}>
          <img className={styles.arrow} src={nextIcon} alt="next page" />
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return ({
      pokemons: state.pokemons,
      prevPage: state.prevPage,
      nextPage: state.nextPage,
      offset: state.offset,
      offsetDatabase: state.offsetDatabase,
      typeSelected: state.typeSelected,
      origin: state.origin,
      order: state.order,
      loadingPokes: state.loadingPokes
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadPokes: (offset, offsetDatabase, typeSelected, origin, order) => { dispatch(loadPokes(offset, offsetDatabase, typeSelected, origin, order)) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeCards)
