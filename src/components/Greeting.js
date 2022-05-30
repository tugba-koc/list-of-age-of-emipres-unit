import React from 'react';
import "./style.css";
import { useLocation } from 'react-router-dom'

function Greeting() {

  const location = useLocation();

  let greeting = "Welcome!";

  let greetingUnits = "Units Page";

  let greetingDetailUnit = "Detail Of Unit Page";

  return (
    <div className="greeting--header-line">{ location.pathname === "/units" ? greetingUnits : location.pathname === "/" ? greeting : greetingDetailUnit }</div>
  )
}

export default Greeting