import React from 'react'
import styles from './search.module.css'
import SearchIcon from '../../assets/search.svg' 

export const Search = () => {
  const handleSubmit = () => {
    console.log('hola');
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
