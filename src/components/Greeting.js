import React from 'react';
import "./HomePage/style.css";
import { useLocation } from 'react-router-dom'

function Greeting() {

  const location = useLocation();

  let greeting = "Welcome!";

  let greetingUnits = "Units Page";

  return (
    <div className="greeting--header-line">{ location.pathname === "/units" ? greetingUnits : greeting }</div>
  )
}

export default Greeting