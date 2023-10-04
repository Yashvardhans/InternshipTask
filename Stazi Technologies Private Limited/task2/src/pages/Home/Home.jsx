import React from 'react';

import CityCard from '../../component/CityCard/CityCard';

import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-header">
                <div className="home-title">Featured Listed Property</div>
                <p>
                    Aliqua fugiat mollit aliqua voluptate ipsum. Laborum ullamco id duis tempor labore aute ad ea in. Culpa consequat labore aliquip aliqua ut.
                </p>
                
            </div>
            <CityCard></CityCard>
        </div>
    );
};

export default Home;