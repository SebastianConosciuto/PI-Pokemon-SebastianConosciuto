import React from 'react'
import styles from './button.module.css'

const buttonTypes = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    terciary: styles.terciaryButton
}

export const Button = ({ text, cb, type, disabled=false }) => {
  return (
    <div>
        <button 
          disabled={disabled}
          onClick={cb} 
          className={buttonTypes[type]}
        >
            {text}
        </button>
    </div>
  )
}