import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-main-text-wrapper'>
                <p className='header-main-text'>Stocker</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            </div>
            <div className='header-sub-text-wrapper'>
                <p className='header-sub-text'>Want to assess your stock's profitability? Well you're at the right place.🚀</p>
            </div>
        </div>
    )
}

export default Header;