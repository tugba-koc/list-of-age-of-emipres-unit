import React from 'react'
import Greeting from '../components/Greeting'
import AgeFilter from '../components/UnitsPage/AgeFilter'
import CostFilter from '../components/UnitsPage/CostFilter'

function Units() {
  return (
    <React.Fragment>
      <Greeting />
      <AgeFilter />
      <CostFilter />
    </React.Fragment>
  )
}

export default Units