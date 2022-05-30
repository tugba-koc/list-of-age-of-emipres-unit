import React from 'react';
import "../../../scss/component/_cost-filter.scss";
import CostFilterItem from './CostFilterItem';


function CostFilter() {

  // cost filter options
  let costFilter = [
    {
      name: "Wood",
      id: 1
    },
    {
      name: "Food",
      id: 2
    },
    {
      name: "Gold",
      id: 3
    }
  ];

  return (
    <div className="cost-filter-wrapper">
      <h5 className='cost-filter-header-main'>CostFilter</h5>
      {costFilter.map((el) => (
        <CostFilterItem el={el} key={el.id}/>
      )
      )}

    </div>
  )
}

export default CostFilter