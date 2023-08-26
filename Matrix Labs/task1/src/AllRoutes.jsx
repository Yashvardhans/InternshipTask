import React from 'react';
import {Routes ,  Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import TokenPage from './pages/TokenPage/TokenPage';
import PairPage from './pages/PairPage/PairPage';

const AllRoutes = () => {
    return (
        <div className="content">
            <Routes>
                <Route path='/' element = {<TokenPage/>}></Route>
                <Route path='/token/' element = {<TokenPage/>}></Route>
                <Route path='/pair' element = {<PairPage/>}></Route>

            </Routes>
        </div>
    );
};

export default AllRoutes;