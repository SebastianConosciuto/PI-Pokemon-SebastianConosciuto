import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadOnePoke } from '../../redux/actions'
import styles from './search.module.css'
import SearchIcon from '../../assets/search.svg' 

const Search = ({ loadOnePoke, detailPokemon }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (detailPokemon?.hasOwnProperty('id')) {
      navigate(`/detail/${detailPokemon.id}`, { replace: true })
    }
  }, [detailPokemon])

  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    loadOnePoke(name);
  }

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Who's that pokemon?"
      />
      <button type="submit">
        <img className={styles.searchImage} src={SearchIcon} alt="Search" />
      </button>
    </form>
  )
}

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
)(Search)
