
import React from 'react';
import { CARDS_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router';


const Cards = () => {
    const [params, setParams] =useSearchParams() ;

    const handleClick = (name) => {
        setParams({ name: name.toLowerCase().replace(/\s+/g, '-') });
    };

    return (
        <div>
            <h2 className='text-center mt-4 mb-2 text-custom-8xl'>Search Params</h2>
        <div className='d-flex align-items-center flex-wrap gap-4 justify-content-center'>
            {CARDS_LIST.map((obj, i) => (
                <div key={i}  onClick={() => handleClick(obj.heading)} className='card p-4'>
                    <h2
                        className='text-center py-4'>
                        {obj.heading}
                    </h2>
                    <p>{obj.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Cards;
