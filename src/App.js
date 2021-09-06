import React from 'react';
import './App.css';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';

const App = () => {
    return (
        <div className='app-wrapper'>
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default App;