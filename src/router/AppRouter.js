import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Units from '../pages/Units';
import DetailUnit from '../pages/DetailUnit';

function AppRouter() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/units">Units Page</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="units" element={<Units />} />
                <Route path="/units/detail-of-unit/:unit_id" element={<DetailUnit />} />
            </Routes>
        </>
    )
}

export default AppRouter;