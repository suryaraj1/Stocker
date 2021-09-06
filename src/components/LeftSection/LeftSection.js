import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './LeftSection.css';

const LeftSection = () => {
    return (
        <div className='left-section-wrapper'> 
            <div className='left-section-main'>
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default LeftSection;