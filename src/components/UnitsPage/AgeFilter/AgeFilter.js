import React from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import {filterItems} from '../../../redux/actions/items';

function AgeFilter() {

  const dispatch = useDispatch();

  const FilterNames = ["All", "Dark", "Feudal", "Castle", "Imperial"];

  return (
    <React.Fragment>
      <div>Ages</div>

      <div className="button-group">
        {FilterNames.map((el,index) => (
          <button onClick={()=>dispatch(filterItems(el))} key={index} type="button" className="button-item">{el}</button>
        ))}
      </div>
    </React.Fragment>
  )
}

export default AgeFilter