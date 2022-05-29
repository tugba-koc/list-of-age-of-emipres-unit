import React from 'react'

function Item({item}) {
    return (
        <React.Fragment>
            <tr>
                <th style={{"width":"70px"}} scope="row"> {item.id} </th>
                <td style={{"width":"150px"}}> {item.name} </td>
                <td style={{"width":"150px"}}> {item.age} </td>
                <td style={{"width":"150px"}}> {JSON.stringify(item.cost).replaceAll('"',"").replaceAll("{","").replaceAll("}","")} </td>
            </tr>
        </React.Fragment>
    )
}

export default Item