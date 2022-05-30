import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Item({item}) {
    const navigate = useNavigate();

    let isFilteredByCost = useSelector(state => state.items.isFilteredByCost);

    const handleOnClick = () => {
        navigate('/units/detail-of-unit/'+ item.id);
        isFilteredByCost = !isFilteredByCost;
    };
  
    return (
        <React.Fragment>
            <tr onClick={handleOnClick}>
                <th style={{"width":"70px"}} scope="row"> {item.id} </th>
                <td style={{"width":"150px"}}> {item.name} </td>
                <td style={{"width":"150px"}}> {item.age} </td>
                <td style={{"width":"150px"}}> {JSON.stringify(item.cost).replaceAll('"',"").replaceAll("{","").replaceAll("}","")} </td>
            </tr>
        </React.Fragment>
    )
}

export default Item