import React from 'react';
import { getItems } from '../../../redux/actions/items';
import { useSelector, useDispatch } from 'react-redux';
import "./style.css"
import Item from './Item';

function ItemList() {

    const dispatch = useDispatch();

    const filteredItemsbyAge = useSelector(state => state.items.filteredItemsbyAge);
    const filteredItemsbyCost = useSelector(state => state.items.filteredItemsbyCost);
    const isFilteredByCost = useSelector(state => state.items.isFilteredByCost);
    const isFilteredByAge = useSelector(state => state.items.isFilteredByAge);

    React.useEffect(() => {
        dispatch(getItems());
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{"width":"70px"}}>id</th>
                        <th style={{"width":"150px"}}>Name</th>
                        <th style={{"width":"150px"}}>Age</th>
                        <th style={{"width":"150px"}}>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {(isFilteredByAge || isFilteredByCost) && filteredItemsbyCost.length && filteredItemsbyCost.map(el=>(
                    <Item key={el.id} item={el} />
                        )) }
                    {(!isFilteredByAge || isFilteredByAge) && !isFilteredByCost && filteredItemsbyAge.map(el=>(
                    <Item key={el.id} item={el} />
                        )) }
                </tbody>
            </table>
        </>
    )
}

export default ItemList