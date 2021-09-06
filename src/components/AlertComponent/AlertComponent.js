import React from "react";
import "./AlertComponent.css";

const renderAlertMessage = (
    profit,
    loss,
    unChanged,
    value,
    valuePercentage
) => {
    if (profit && !unChanged && !loss) {
        return `Congratulations! Your profit is ${value} and profit percentage is ${valuePercentage}!🎉`;
    } else if (loss && !profit && !unChanged) {
        return `Sorry! Your loss is ${value} and loss percentage is ${valuePercentage}!😭`;
    } else if (unChanged && !profit && !loss) {
        return "No pain no gain, no gain no pain.";
    }
};

const appendStyle = (profit, loss, unChanged) => {
    if (profit && !unChanged && !loss) {
        return "profit";
    } else if (!profit && !unChanged && loss) {
        return "loss";
    } else if (unChanged && !profit && !loss) {
        return "unchanged";
    }
};

const AlertComponent = ({
    profit,
    loss,
    unChanged,
    value,
    valuePercentage,
    isNegativeInput,
}) => {
    console.log(isNegativeInput);
    return (
        <div>
            {isNegativeInput && (
                <div className="alert-component-wrapper-negative-inputs">
                    <p className="alert">Please provide positive inputs ⚠</p>
                </div>
            )}
            {!isNegativeInput && (
                <div
                    className={`alert-component-wrapper ${appendStyle(
                        profit,
                        loss,
                        unChanged
                    )}`}
                >
                    <p className="alert">
                        {renderAlertMessage(
                            profit,
                            loss,
                            unChanged,
                            value,
                            valuePercentage
                        )}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AlertComponent;
