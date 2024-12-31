import React from 'react'
import { COMPETITION, COMPETITION_LIST } from '../utils/helper'

function Competition() {
    return (
        <div className='grid-parent d-flex justify-content-center align-items-center px-3'>
            <div className='competition d-flex align-items-center table-padding'>
                <div className='competition-text'>
                    <h1 className='text-custom-8xl heading text-white'>Competition</h1>
                    <div>
                        {COMPETITION.map((obj, index) => (
                            <p className='fs-6 text-white line-height-150' key={index}>{obj}</p>
                        ))}
                    </div>
                </div>
                <div className='w-100 overflow-x-auto overflow-hidden'>
                <div className='competition-card mx-auto'>
                    <div>
                        <div className='d-flex table-heading'>
                            <p className='bg-white table-text'>Rift</p>
                            <p className='bg-white table-text'>Taxscouts</p>
                            <p className='bg-white table-text'>Coconut</p>
                            <p className='bg-white table-text'>Pie</p>
                        </div>
                        {COMPETITION_LIST.map((obj, i) => (

                            <div key={i}>
                                <div className='d-flex'>
                                    <div className='d-flex gap-4 align-items-center border-b'>
                                        <h4 className='text-white d-flex text-custom-sm brand'>{obj.brand}</h4>
                                        <div className='d-flex gap-2'>
                                            <p className='bg-white content d-flex icons text-custom-xs'>{obj.rift}</p>
                                            <p className='bg-white content d-flex icons text-custom-xs'>{obj.taxscout}</p>
                                            <p className='bg-white content text-custom-xs d-flex icons'>{obj.coconut}</p>
                                            <p className='bg-white content text-custom-xs d-flex icons'>{obj.pie}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Competition