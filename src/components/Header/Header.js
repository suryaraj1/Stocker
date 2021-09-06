import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-main-text-wrapper'>
                <p className='header-main-text'>Stocker</p>
            </div>
            <div className='header-sub-text-wrapper'>
                <p className='header-sub-text'>Want to assess your stock's profitability? Well you're at the right place.🚀</p>
            </div>
        </div>
    )
}

export default Header;