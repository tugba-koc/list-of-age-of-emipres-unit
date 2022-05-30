import React from 'react'
import DetailUnitList from '../components/DetailUnitList/DetailUnitList';
import { useParams } from "react-router-dom"
import Greeting from '../components/Greeting';

function DetailUnit() {

    let { unit_id } = useParams();

    return (
        <React.Fragment>
            <Greeting />
            <DetailUnitList unit_id={unit_id} />
        </React.Fragment>
    )
}

export default DetailUnit