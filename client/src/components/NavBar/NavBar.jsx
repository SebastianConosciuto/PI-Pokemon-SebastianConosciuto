import React from 'react';
import styles from './navBar.module.css';
import { Button } from '../../atoms/Button/Button'
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Button 
        text='Add to Pokedex'
        cb={() => navigate('/form')}
        type='secondary'
      />
    </div>
  )
}
