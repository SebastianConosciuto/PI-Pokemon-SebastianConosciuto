import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './formPage.module.css'
import { Form } from '../../components/Form/Form';
import { Button } from '../../atoms/Button/Button';

export const FormPage = () => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/home', { replace: true })
  }

  return (
    <div className={styles.container}>
      <Form />
      <Button
        type='terciary'
        text='Go Back Home'
        cb={() => goBack()}
      />
    </div>
  );
}
