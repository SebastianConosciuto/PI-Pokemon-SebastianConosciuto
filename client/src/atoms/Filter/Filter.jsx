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
      <div>
        <select onChange={handleChangeType} name="type" id="type">
          <option value={0}>all</option>
          {
            types.length && types.map((type) => 
              <option key={type.id} value={type.id}>{type.name}</option>
            )
          }
        </select>
      </div>
      <div>
        <select onChange={handleChangeOrigin} name="origen" id="origen">
          <option value={0}>all</option>
          <option value={1}>db</option>
          <option value={2}>api</option>
        </select>
      </div>
      <div>
        <select onChange={handleChangeOrder} name="orden" id="orden">
          <option value={0}>Default</option>
          <option value={1}>A-Z</option>
          <option value={2}>Z-A</option>
          <option value={3}>Ataque Asc</option>
          <option value={4}>Ataque Des</option>
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
