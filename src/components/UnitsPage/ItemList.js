import React from 'react';
import { getItems } from '../../redux/actions/items';
import {useSelector, useDispatch} from 'react-redux';

function ItemList() {
    const dispatch = useDispatch();
    // const items = useSelector(state => state.items);

    React.useEffect(() => {
        dispatch(getItems());
    }, [])

    return (
        <div>ItemList</div>
    )
}

export default ItemList