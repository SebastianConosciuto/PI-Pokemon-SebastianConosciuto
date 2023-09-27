import React from 'react'
import styles from './homePage.module.css'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import HomeCards from '../../components/HomeCards/HomeCards'
import { NavBar } from '../../components/NavBar/NavBar'

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header} id='hp-header'>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Professor Oak's Laboratory
          </h1>
        </div>
        <SearchBar />
        <NavBar />
      </header>
      <section className={styles.section} id='hp-body'>
        <HomeCards />
      </section>
      <footer className={styles.footer} id='hp-footer'>
        Sebastián González Conosciuto - 2023
      </footer>
    </div>
  )
}