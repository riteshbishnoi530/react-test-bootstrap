
import React from 'react';
import { CARD_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router';


const Cards = () => {
    const [params, setParams] =useSearchParams() ;

    const handleClick = (name) => {
        setParams({ name: name.toLowerCase() });
    };

    return (
        <div className='d-flex align-items-center flex-wrap gap-4 justify-content-center h-screen'>
            {CARD_LIST.map((obj, i) => (
                <div key={i} className='card px-4'>
                    <h2
                        onClick={() => handleClick(obj.heading)}
                        className='text-center py-4'>
                        {obj.heading}
                    </h2>
                    <p>{obj.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
