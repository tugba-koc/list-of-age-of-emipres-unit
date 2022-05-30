import React from 'react';
import {useNavigate} from 'react-router-dom';

function Item({item}) {
    const navigate = useNavigate();

    // navigate to detail page
    const handleOnClick = () => {
        navigate('/units/detail-of-unit/'+ item.id);
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