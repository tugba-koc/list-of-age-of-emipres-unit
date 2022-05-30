import React from 'react';
import { getItems } from '../../../redux/actions/items';
import { useSelector, useDispatch } from 'react-redux';
import "../../../scss/component/_item-list.scss";
import Item from './Item';
import Spinner from '../../Spinner';
import Error from '../../Error';
import ErrorList from '../../ErrorList';

function ItemList() {

    const dispatch = useDispatch();

    let filteredItemsbyAge = useSelector(state => state.items.filteredItemsbyAge);
    let filteredItemsbyCost = useSelector(state => state.items.filteredItemsbyCost);
    let isFilteredByCost = useSelector(state => state.items.isFilteredByCost);
    let isFilteredByAge = useSelector(state => state.items.isFilteredByAge);
    const loading = useSelector(state => state.items.loading);
    const error = useSelector(state => state.items.error);

    React.useEffect(() => {
        dispatch(getItems());
    }, [dispatch])

    if (loading) {
        return (
            <Spinner />
        )
    }

    if (error) {
        return (
            <Error />
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ "width": "70px" }}>id</th>
                        <th style={{ "width": "150px" }}>Name</th>
                        <th style={{ "width": "150px" }}>Age</th>
                        <th style={{ "width": "150px" }}>Cost</th>
                    </tr>
                </thead>
                {(!filteredItemsbyAge.length || !filteredItemsbyCost.length) && (isFilteredByAge || isFilteredByCost) ? <ErrorList /> : (
                    <tbody>
                        {(isFilteredByAge || isFilteredByCost) && filteredItemsbyCost.length && filteredItemsbyCost.map(el => (
                            <Item key={el.id} item={el} />
                        ))}
                        {(!isFilteredByAge || isFilteredByAge) && !isFilteredByCost && filteredItemsbyAge.map(el => (
                            <Item key={el.id} item={el} />
                        ))}
                    </tbody>
                )}

            </table>
        </>
    )
}

export default ItemList