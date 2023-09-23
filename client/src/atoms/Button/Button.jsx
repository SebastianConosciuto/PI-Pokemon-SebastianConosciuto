import React from 'react'
import styles from './button.module.css'

const buttonTypes = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton
}

export const Button = ({ text, cb, type }) => {
  return (
    <div>
        <button 
            onClick={cb} 
            className={buttonTypes[type]}
        >
            {text}
        </button>
    </div>
  )
}