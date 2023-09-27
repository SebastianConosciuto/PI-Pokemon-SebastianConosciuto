import React from "react";
import styles from "./filter.module.css";
import { connect } from "react-redux";
import { setType, cleanOffset, setOrigin, setOrder } from "../../redux/actions";

const Filter = ({ types, setType, setOrigin, setOrder, cleanOffset }) => {

  const handleChangeType = (event) => {
    event.preventDefault()
    cleanOffset()
    setType(event.target.value)
  }

  const handleChangeOrigin = (event) => {
    event.preventDefault()
    cleanOffset()
    setOrigin(event.target.value)
  }

  const handleChangeOrder = (event) => {
    event.preventDefault()
    cleanOffset()
    setOrder(event.target.value)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <label htmlFor="">Types</label>
        <select className={styles.select} onChange={handleChangeType} name="type" id="type">
          <option className={styles.options} value={0}>all</option>
          {
            types.length && types.map((type) => 
              <option className={styles.options} key={type.id} value={type.id}>{type.name}</option>
            )
          }
        </select>
      </div>
      <div className={styles.filters}>
        <label htmlFor="">Origin</label>
        <select className={styles.select} onChange={handleChangeOrigin} name="origen" id="origen">
          <option className={styles.options} value={0}>all</option>
          <option className={styles.options} value={1}>db</option>
          <option className={styles.options} value={2}>api</option>
        </select>
      </div>
      <div className={styles.filters}>
        <label>Order</label>
        <select className={styles.select} onChange={handleChangeOrder} name="orden" id="orden">
          <option className={styles.options} value={0}>Default</option>
          <option className={styles.options} value={1}>A-Z</option>
          <option className={styles.options} value={2}>Z-A</option>
          <option className={styles.options} value={3}>Ataque Asc</option>
          <option className={styles.options} value={4}>Ataque Des</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
      types: state.types
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    setType: (type) => { dispatch(setType(type)) },
    setOrigin: (origin) => { dispatch(setOrigin(origin)) },
    setOrder: (order) => { dispatch(setOrder(order)) },
    cleanOffset: () => { dispatch(cleanOffset()) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
