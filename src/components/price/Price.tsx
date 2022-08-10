import React from 'react'
import { PricePropsType } from './types';

const Price = ({ price, discount, hasdiscount, isprofitable }: PricePropsType) => {
    return (
        <div className="cryptoprice-value-wrapper">
            <input type="text" className='crypto-price' defaultValue={price} />
            {
                hasdiscount && <span className={`discount ${isprofitable ? 'profit' : 'loss'}`}>{discount}</span>
            }
        </div>
    )
}

export { Price }