import React from 'react';
import { getItems } from '../../../redux/actions/items';
import { useSelector, useDispatch } from 'react-redux';
import "./style.css"
import Item from '../Item';

function ItemList() {
    const dispatch = useDispatch();
    const filteredItems = useSelector(state => state.items.filteredItems);

    React.useEffect(() => {
        dispatch(getItems());
    }, [])

    return (
        <>
            <table className="table">
                <thead className="col-12">
                    <tr>
                        <th className="col-3">id</th>
                        <th className="col-3">Name</th>
                        <th className="col-3">Age</th>
                        <th className="col-3">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length && filteredItems.map(el=>(
                    <Item key={el.id} item={el} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ItemList