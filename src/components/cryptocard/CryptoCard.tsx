import React, { useState } from 'react';
import './cryptocard.css'
import { CryptoCardPropsType } from './types';
import { Title, Price, CryptoList } from '../index'


const CryptoCard = ({ cryptoDetail }: CryptoCardPropsType) => {


    return (
        <div className='group' >
            <div className='card-content'>
                <div className="icon">
                </div>
                <div className="content">
                    <Title title={cryptoDetail.currencyname} />

                    <Price price={cryptoDetail.price} discount={cryptoDetail.profit} hasdiscount={true} isprofitable={cryptoDetail.isprofit} />

                    <Title title={"Price"} />


                    <Price price={cryptoDetail.tvlprice} />
                    <Title title={"TVL"} />

                    <div className="crypto-tvl-list">
                        {
                            cryptoDetail.tvllists.map(tvllist => <CryptoList key={tvllist.id} cryptoImage={tvllist.pairimage} cryptoAltText={tvllist.alt} />)
                        }
                    </div>
                    <Title title={"Popular pairs"} />
                </div>
            </div>
            <div className="circle">
                <img src={cryptoDetail.cryptoimage}
                    className='crypto-coin-img'
                    alt={cryptoDetail.currencyname} />
            </div>
        </div>

    )
}

export { CryptoCard }