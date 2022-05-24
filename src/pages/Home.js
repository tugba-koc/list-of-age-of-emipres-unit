import React from 'react'
import Cover from '../components/HomePages/Cover'
import Greeting from '../components/HomePages/Greeting'

function Home() {
  return (
    <React.Fragment>
      <Greeting />
      <Cover />
    </React.Fragment>
  )
}

export default Home