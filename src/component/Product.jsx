import React from 'react'
import { PRODUCT } from '../utils/helper'

function Product() {
    return (
        <div className='grid-parent px-3 align-items-center d-flex'>
            <div className='d-flex gap-2 product'>
                <div className='product-text'>
                    <h1 className='text-custom-8xl text-white heading'>Product</h1>
                    <div>
                        {PRODUCT.map((obj, index) => (
                            <p className='fs-6 text-white line-height-150' key={index}>{obj}</p>
                        ))}
                    </div>
                </div>
                <div className='grid align-items-center'>
                    <img className='w-full grid-1' src="/assets/images/good-news.webp" alt="" />
                    <img className='w-full grid-2' src="/assets/images/connect-your-bank.webp" alt="" />
                    <img className='w-full grid-3' src="/assets/images/tax-dates.webp" alt="" />
                    <img className='w-full grid-4' src="/assets/images/income-expenditure.webp" alt="" />
                    <img className='w-full grid-5' src="/assets/images/income-in-one-place.webp" alt="" />
                    <img className='w-full grid-6' src="/assets/images/return.webp" alt="" />
                    <img className='w-full grid-7' src="/assets/images/connect-multiple-bank.webp" alt="" />
                    <img className='w-full grid-8' src="/assets/images/filling-to-hmrc.webp" alt="" />
                    <img className='w-full grid-9' src="/assets/images/bookkeeping.webp" alt="" />
                    <img className='w-full grid-10' src="/assets/images/invoicing.webp" alt="" />
                    <img className='w-full grid-11' src="/assets/images/real-time-tax.webp" alt="" />
                    <img className='w-full grid-12' src="/assets/images/dedicated-tax-assistants.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Product