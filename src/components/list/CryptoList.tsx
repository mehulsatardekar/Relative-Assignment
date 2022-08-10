import React from 'react'
import { CryptoListPropsType } from './types'

const CryptoList = ({ cryptoImage, cryptoAltText }: CryptoListPropsType) => {
    return (
        <img src={cryptoImage}
            className='crypto-list-img'
            alt={cryptoAltText} />
    )
}

export { CryptoList };