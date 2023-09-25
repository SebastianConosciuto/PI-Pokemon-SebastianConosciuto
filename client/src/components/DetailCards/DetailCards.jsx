import React from 'react'
import styles from './detailCards.module.css'
import { Button } from '../../atoms/Button/Button'

export const DetailCards = ({ pokemon }) => {
  return (
    <div>
      <div>
        <div>
          <h1></h1>
          
        </div>
        <img src={pokemon.image} alt="" />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
