import React from 'react'
import Greeting from '../components/Greeting'
import AgeFilter from '../components/UnitsPage/AgeFilter/AgeFilter'
import CostFilterList from '../components/UnitsPage/CostFilterList/CostFilterList'
import ItemList from '../components/UnitsPage/ItemList/ItemList';
import "./style.css"

function UnitLayout() {
  return (
    <React.Fragment>
      <Greeting />
      <div className='unit-layout-wrapper'>
        <div className='left-part'>
          <AgeFilter />
          <CostFilterList />
        </div>
        <ItemList />
      </div>
    </React.Fragment>
  )
}

export default UnitLayout