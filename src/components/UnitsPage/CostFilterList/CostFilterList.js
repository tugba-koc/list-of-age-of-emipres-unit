import React from 'react';
import "./style.scss";
import CostFilterItem from './CostFilterItem';


function CostFilter() {

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