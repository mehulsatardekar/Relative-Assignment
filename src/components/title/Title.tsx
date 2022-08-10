import React from 'react'
import { TitlePropsType } from './types';

const Title = ({ title }: TitlePropsType) => {
    return (
        <h2 className="crypto-name">
            {title}
        </h2>
    )
}

export { Title }