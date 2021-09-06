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
            clickCount: 0
        }
    }

    initialPriceHandler = price => {
        this.setState({
            initialStockPrice: price
        })
    }

    stockQuantityHandler = quantity => {
        this.setState({
            stockQuantity: quantity
        })
    }

    currentPriceHandler = price => {
        this.setState({
            currentStockPrice: price
        })
    }

    reset = () => {
        this.setState({
            initialStockPrice: 0,
            currentStockPrice: 0,
            stockQuantity: 0,
            profit: false, 
            loss: false, 
            unChanged: false, 
            value: 0.0,
            valuePercentage: 0.00
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
                unchanged: false,
            });
        } else if (currentStockPrice > initialStockPrice) {
            const profit = (currentStockPrice - initialStockPrice) * stockQuantity;
            const profitPercentage = (profit / (initialStockPrice * stockQuantity)) * 100.0;
            this.setState({
                value: parseFloat(profit).toFixed(2),
                valuePercentage: parseFloat(profitPercentage).toFixed(2),
                profit: true,
                loss: false,
                unChanged: false
            })
        } else {
            this.setState({
                unChanged: true,
                profit: false,
                loss: false
            })
        }
    }

    onClickHandler = () => {
        const { initialStockPrice, stockQuantity, currentStockPrice } = this.state;
        this.analyzeStocks(initialStockPrice, stockQuantity, currentStockPrice);
        this.setState({
            clickCount: this.state.clickCount + 1,
        })
    }

    render() {
        const { profit, loss, unChanged, clickCount, value, valuePercentage } = this.state; 
        return (
            <div className='right-section-wrapper'>
                <div className='right-section-input-wrapper'>
                    <InputComponent inputLabel="Inital Stock Price" handler={this.initialPriceHandler}/>
                    <InputComponent inputLabel="Quantity of Stocks" handler={this.stockQuantityHandler}/>
                    <InputComponent inputLabel="Current Stock Price" handler={this.currentPriceHandler}/>
                </div>
                <div className='right-section-btn-wrapper'>
                    <button onClick={this.onClickHandler}>Check</button>
                </div>
                <div className='right-section-alert-wrapper'>
                    {clickCount > 0 && <AlertComponent profit={profit} loss={loss} unChanged={unChanged} value={value} valuePercentage={valuePercentage}/>}
                </div>
            </div>
        )
    }
}

export default RightSection;