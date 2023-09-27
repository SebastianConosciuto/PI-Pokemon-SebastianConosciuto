import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './detailPage.module.css';
import DetailCard from '../../components/DetailCards/DetailCard';
import { Button } from '../../atoms/Button/Button';
import { cleanPokemon } from '../../redux/actions';

const DetailPage = ({ cleanPokemon }) => {

  const navigate = useNavigate()

  const cleanAndReturn = () => {
    cleanPokemon()
    navigate('/home', { replace: true })
  }

  return (
    <div className={styles.page}>
      <DetailCard />
      <Button
        type='terciary'
        text='Go back Home'
        cb={() => cleanAndReturn()}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
     cleanPokemon: () => { dispatch(cleanPokemon()) },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DetailPage)

