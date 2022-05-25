import React from 'react';
import "./style.css"

function CostFilter() {
  let [value, setValue] = React.useState(10)

  let costFilter = ["Wood", "Food", "Gold"];

  const updateRange = (e,i) => {
    const newObject = {...value};
    newObject[`${i}`] = {value: e.target.value}
    setValue(newObject)
  }

  
  return (
    <div className="cost-filter-wrapper">
      <div>CostFilter</div>
      {costFilter.map((el, index) => (
        <div className="filter-configure-line" key={index}>
          <input type="checkbox" id="costFilterItem" name={el}></input>
          <label htmlFor="">{el}</label>
          <input value={0 || index.value} onChange={(e)=>updateRange(e,index)} className="range" type="range" id={index} name="points" min="0" max="200" step={10}></input>
          <div>{value[index] ? "0-" + value[index]["value"] :"" }</div>
        </div>
      )
      )}

    </div>
  )
}

export default CostFilter