import React from 'react';

export default function Header({ lastUpdated = Date(), price = 145.35, priceChange = 1.5, percentChange = 2.53 }) {
    return (

        <header className='header'>
            <div className="header-left">
                <h1>Apple Inc</h1>
                <p>{lastUpdated}</p>
            </div>
            <div className='header-right'>
                <p className='header__price'>{price}%</p>
                <p className='header__price-change'>{priceChange > 0 ? '+' : ''}{priceChange.toFixed(4)}$ ({percentChange}%)</p>
            </div>
        </header>
    );
};

