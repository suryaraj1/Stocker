import React from 'react';
import AlertComponent from '../AlertComponent/AlertComponent';
import InputComponent from '../InputComponent/InputComponent';
import './RightSection.css';

class RightSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStockPrice: 0,
            stockQuantity: 0,
            currentStockPrice: 0,
            value: 0.00,
            valuePercentage: 0.00,
            profit: false,
            loss: false,
            unchanged: false,
            isNegativeInput: false,
            clickCount: 0
        }
    }

    initialPriceHandler = price => {
        this.setState({
            initialStockPrice: parseFloat(price)
        })
    }

    stockQuantityHandler = quantity => {
        this.setState({
            stockQuantity: parseInt(quantity)
        })
    }

    currentPriceHandler = price => {
        this.setState({
            currentStockPrice: parseFloat(price)
        })
    }
    
    analyzeStocks = (initialStockPrice, stockQuantity, currentStockPrice) => {
        if (initialStockPrice > currentStockPrice) {
            const loss = (initialStockPrice - currentStockPrice) * stockQuantity;
            const lossPercentage = (loss / (initialStockPrice * stockQuantity)) * 100.0;
            this.setState({
                value: parseFloat(loss).toFixed(2),
                valuePercentage: parseFloat(lossPercentage).toFixed(2),
                loss: true,
                profit: false,
                unChanged: false,
                isNegativeInput: false
            })
        } else if (currentStockPrice > initialStockPrice) {
            const profit = (currentStockPrice - initialStockPrice) * stockQuantity;
            const profitPercentage = (profit / (initialStockPrice * stockQuantity)) * 100.0;
            this.setState({
                value: parseFloat(profit).toFixed(2),
                valuePercentage: parseFloat(profitPercentage).toFixed(2),
                profit: true,
                loss: false,
                unChanged: false,
                isNegativeInput: false
            })
        } else {
            this.setState({
                unChanged: true,
                profit: false,
                loss: false,
                isNegativeInput: false
            })
        }
    }

    validateInput = () => {
        const { initialStockPrice, stockQuantity, currentStockPrice } = this.state;
        return (initialStockPrice >= 0.0 && stockQuantity >= 0 && currentStockPrice >= 0.0);
    }

    areInputsNegative = () => {
        const { initialStockPrice, stockQuantity, currentStockPrice } = this.state;
        return (initialStockPrice < 0.0 || stockQuantity < 0 || currentStockPrice < 0.0);
    }

    onClickHandler = () => {
        const { initialStockPrice, stockQuantity, currentStockPrice } = this.state;
        if (this.areInputsNegative()) {
            this.setState({
                isNegativeInput: true
            })
        } else if (this.validateInput(initialStockPrice, stockQuantity, currentStockPrice)) {
            this.analyzeStocks(initialStockPrice, stockQuantity, currentStockPrice);
        }
        this.setState({
            clickCount: this.state.clickCount + 1,
        })
    }

    validateInput = () => {
        const { initialStockPrice,stockQuantity, currentStockPrice } = this.state;
        return (initialStockPrice !== 0 && stockQuantity !== 0 && currentStockPrice !== 0);
    }

    render() {
        const { profit, loss, unChanged, clickCount, value, valuePercentage, isNegativeInput } = this.state; 
        return (
            <div className='right-section-wrapper'>
                <div className='right-section-input-wrapper'>
                    <InputComponent inputLabel="Inital Stock Price" handler={this.initialPriceHandler}/>
                    <InputComponent inputLabel="Quantity of Stocks" handler={this.stockQuantityHandler}/>
                    <InputComponent inputLabel="Current Stock Price" handler={this.currentPriceHandler}/>
                </div>
                <div className='right-section-btn-wrapper'>
                    <button className={`${!this.validateInput() ? "disabled" : "active"}`} onClick={this.onClickHandler} disabled={!this.validateInput()}>Check</button>
                </div>
                <div className='right-section-alert-wrapper'>
                    {clickCount > 0 && <AlertComponent profit={profit} loss={loss} unChanged={unChanged} value={value} valuePercentage={valuePercentage} isNegativeInput={isNegativeInput}/>}
                </div>
            </div>
        )
    }
}

export default RightSection;