import React from 'react';
import propTypes from 'prop-types'
function TechItem(props){
  return(
    <div>
    <li key={props.element}>
      {props.element}
     <button onClick={() => props.handleDelete(props.element)} type="button">Remove Item</button>
    </li>
  </div>
  )
}
TechItem.defaultProps = {
  element: 'Oculto'
}
TechItem.propTypes= {
  element: propTypes.string,
  handleDelete: propTypes.func.isRequired,
}
export default TechItem;
 