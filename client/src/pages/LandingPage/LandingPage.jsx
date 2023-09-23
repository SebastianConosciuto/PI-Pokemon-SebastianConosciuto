import React from 'react'
import { Button } from '../../atoms/Button/Button'
import styles from './landingPage.module.css'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.buttonContainer}>
        <Button
            text='Welcome to Pallet Town'
            cb={() => navigate('/home')}
            type='primary'
        />
      </div>
    </div>
  )
}
