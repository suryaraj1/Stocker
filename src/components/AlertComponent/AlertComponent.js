import React from 'react';
import './AlertComponent.css';

const renderAlertMessage = (profit, loss, unChanged, value, valuePercentage) => {
    if (profit && !unChanged && !loss) {
        return `Congratulations! Your profit is ${value} and profit percentage is ${valuePercentage}!🎉`;
    } else if (!profit && !unChanged && loss) {
        return `Sorry! Your loss is ${value} and loss percentage is ${valuePercentage}!😭`;
    } else if (unChanged && !profit && !loss) {
        return "No pain no gain, no gain no pain."
    }
}

const appendStyle = (profit, loss, unChanged) => {
    if (profit && !unChanged && !loss) {
        return "profit";
    } else if (!profit && !unChanged && loss) {
        return "loss";
    } else if (unChanged && !profit && !loss) {
        return "unchanged";
    } else {
        return "null";
    }
}

const AlertComponent = ({profit, loss, unChanged, value, valuePercentage }) => {
    return (
        <div className={`alert-component-wrapper ${appendStyle(profit, loss, unChanged)}`}>
            <p className='alert'>{renderAlertMessage(profit, loss, unChanged, value, valuePercentage)}</p> 
        </div>
    )
}

export default AlertComponent;