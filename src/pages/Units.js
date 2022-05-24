import React from 'react'
import Greeting from '../components/Greeting'
import AgeFilter from '../components/UnitsPage/AgeFilter'
import CostFilter from '../components/UnitsPage/CostFilter'
import ItemList from '../components/UnitsPage/ItemList'

function Units() {
  return (
    <React.Fragment>
      <Greeting />
      <AgeFilter />
      <CostFilter />
      <ItemList />
    </React.Fragment>
  )
}

export default Units