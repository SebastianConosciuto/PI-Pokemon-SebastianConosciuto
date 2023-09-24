import React from 'react';
import styles from './navBar.module.css';
import { Button } from '../../atoms/Button/Button'
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Button 
        text="Professor Oak's Laboratory"
        cb={() => navigate('/home')}
        type=''
      />
      <Button 
        text='Add to Pokedex'
        cb={() => navigate('/form')}
        type=''
      />
    </div>
  )
}
