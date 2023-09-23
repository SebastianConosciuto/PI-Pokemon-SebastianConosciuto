import React from 'react'
import styles from './homePage.module.css'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { HomeCards } from '../../components/HomeCards/HomeCards'


export const HomePage = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <HomeCards />
      </div>
    </div>
  )
}