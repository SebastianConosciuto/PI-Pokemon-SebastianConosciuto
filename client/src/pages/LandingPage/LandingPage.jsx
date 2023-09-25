import React, { useEffect } from 'react'
import { Button } from '../../atoms/Button/Button'
import styles from './landingPage.module.css'
import { useNavigate } from 'react-router-dom'
import { loadTypes } from '../../redux/actions'
import { connect } from 'react-redux'

export const LandingPage = ({ loadTypes }) => {

  const navigate = useNavigate();

  useEffect(() => {
    loadTypes()
  }, [])

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

const mapDispatchToProps = (dispatch) => {
  return {
     loadTypes: () => { dispatch(loadTypes()) },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LandingPage)