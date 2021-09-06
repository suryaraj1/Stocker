import React from 'react';
import './AlertComponent.css';

const renderAlertMessage = (profit, loss, unChanged) => {
    if (profit) {
        return "Congratulations! Your stocks are making profit!🎉";
    } else if (loss) {
        return "Sorry! Your stocks don't seem to make profit!😭";
    } else if (unChanged) {
        return "No pain no gain, no gain no pain."
    }
}

const appendStyle = (profit, loss, unChanged) => {
    if (profit) {
        return "profit";
    } else if (loss) {
        return "loss";
    } else if (unChanged) {
        return "unchanged";
    }
}

const AlertComponent = ({profit, loss, unChanged }) => {
    return (
        <div className={`alert-component-wrapper ${appendStyle(profit, loss, unChanged)}`}>
            <p className='alert'>{renderAlertMessage(profit, loss, unChanged)}</p> 
        </div>
    )
}

export default AlertComponent;