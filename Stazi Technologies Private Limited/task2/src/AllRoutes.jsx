import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PropertyDetail from './component/PropertyDetail/PropertyDetail';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/property/:selectedCity/:p_id' element={<PropertyDetail></PropertyDetail>}></Route>
            </Routes>
        </div>
    );
};

export default AllRoutes;