import React from 'react'
import { connect } from 'react-redux'
import { loadOnePoke } from '../../redux/actions'
import styles from './search.module.css'
import SearchIcon from '../../assets/search.svg' 

const Search = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" placeholder="Who's that pokemon?" />
      <button type="submit">
        <img className={styles.searchImage} src={SearchIcon} alt="Search" />
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
     loadOnePoke: (offset) => { dispatch(loadOnePoke(offset)) },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
