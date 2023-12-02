import React from 'react';
import { useLocation } from 'react-router-dom';
import CreateText from './CreateText';
import CreateMedia from './CreateMedia';

const FillData = () => {
    const location = useLocation();
    const data = location.state;
    console.log(location, data);

    return (
        <div className='filldata-container'>
            <h2 className='filldata-container-heading'>Create Text & Media</h2>
            {data.textAd && <CreateText />}
            { data.mediaAd && <CreateMedia />}
        </div>
    );
};

export default FillData;
