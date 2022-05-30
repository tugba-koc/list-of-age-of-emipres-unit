import React from 'react';
import "../../../scss/component/_age-filter.scss";
import { useDispatch } from 'react-redux';
import {filterItemsByAge} from '../../../redux/actions/items';

function AgeFilter() { 

  const dispatch = useDispatch();

  // Age filter options 
  const FilterNames = ["All", "Dark", "Feudal", "Castle", "Imperial"];

  return (
    <div className='age-filter-wrapper'>
      <h5 className='age-filter-header-main'>Ages</h5>
      <div className="button-group">
        {FilterNames.map((el,index) => (
          <button onClick={()=>dispatch(filterItemsByAge(el))} key={index} type="button" className="button-item">{el}</button>
        ))}
      </div>
    </div>
  )
}

export default AgeFilter