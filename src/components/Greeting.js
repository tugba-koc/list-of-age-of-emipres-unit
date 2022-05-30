import React from 'react';
import "../scss/component/main.scss";
import { useLocation } from 'react-router-dom'

function Greeting() {

  const location = useLocation();

  // home page greeting
  let greeting = "Welcome!";

  // if user is on units page
  let greetingUnits = "Units Page";

  // if user is on unit detail page
  let greetingDetailUnit = "Unit Detail Page";

  return (
    <div className="greeting--header-line">{ location.pathname === "/units" ? greetingUnits : location.pathname === "/" ? greeting : greetingDetailUnit }</div>
  )
}

export default Greeting