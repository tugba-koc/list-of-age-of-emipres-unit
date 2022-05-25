import React from 'react'

function Item({item}) {
    return (
        <React.Fragment>
            <tr>
                <th className="col-3" scope="row"> {item.id} </th>
                <td className="col-3"> {item.name} </td>
                <td className="col-3"> {item.age} </td>
                <td className="col-3"> {item.id} </td>
            </tr>
        </React.Fragment>
    )
}

export default Item