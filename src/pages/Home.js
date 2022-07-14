import React from 'react'
import Cover from '../components/Cover'
import Greeting from '../components/Greeting'

function Home() {
  return (
    <React.Fragment>
      <Greeting />
      <Cover />
    </React.Fragment>
  )
}

export default Home