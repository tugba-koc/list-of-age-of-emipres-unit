import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./style.scss";
import { useDispatch , useSelector } from 'react-redux';
import { filterItemsByCost, removeCostFilter } from '../../../redux/actions/items';



function CostFilterItem({el}) {
    const [value, setValue] = React.useState([0, 100]);
    const [isChecked, setIsChecked] = React.useState(true);

    const dispatch = useDispatch();
    const filterStateCost = useSelector(state => state.items.filterStateCost);
    const filterStateCheck = useSelector(state => state.items.filterStateCheck);


    const updateRange = (e, newValue) => {
        const name = e.target.name
        setValue(newValue);
        let stateCost = {[`${name}`]: { min: value[0], max: value[1] } }
        dispatch(filterItemsByCost({...filterStateCost,...stateCost}));        
      }
    
      const handleChange = (e, el) => {
        const newObject = { ...isChecked };
        newObject[`${el}`] = e.target.checked;
        setIsChecked(newObject);
        !e.target.isChecked && dispatch(removeCostFilter({...filterStateCheck, ...newObject}));
      }

  return (
    <div className="filter-configure-line">
          <input type="checkbox" id="costFilterItem" onChange={(e) => handleChange(e, el.name)} name={el.name}></input>
          <label className="cost-filter-label" htmlFor="">{el.name}</label>
          <Box sx={{ width: 250 }}>
            <Slider
            min={0}
            max={200}
            step={10}
            marks
              disabled={!isChecked[el.name]}
              name={el.name}
              defaultValue={[0, 100]}
              onChange={updateRange}
              valueLabelDisplay="auto"
            />
          </Box>
          <div className="text">{Object.keys(filterStateCost).includes(el.name) && isChecked[el.name] ? filterStateCost[el.name].min + " - " + filterStateCost[el.name].max : ""} </div>
        </div>
  )
}

export default CostFilterItem