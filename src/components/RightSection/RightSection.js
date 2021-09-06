import React from 'react';
import AlertComponent from '../AlertComponent/AlertComponent';
import InputComponent from '../InputComponent/InputComponent';
import './RightSection.css';

class RightSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStockPrice: "",
            stockQuantity: 0,
            currentStockPrice: "",
            value: 0.00,
            valuePercentage: 0.00,
            profit: false,
            loss: false,
            unchanged: false
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
    
    analyzeStocks = (initialStockPrice, stockQuantity, currentStockPrice) => {
        if (initialStockPrice > currentStockPrice) {
            const loss = (initialStockPrice - currentStockPrice) * stockQuantity;
            const lossPercentage = (loss / (initialStockPrice * stockQuantity)) * 100.0;
            this.setState({
                loss: true,
                value: parseFloat(loss).toFixed(2),
                valuePercentage: parseFloat(lossPercentage).toFixed(2)
            })
        } else if (currentStockPrice > initialStockPrice) {
            const profit = (currentStockPrice - initialStockPrice) * stockQuantity;
            const profitPercentage = (profit / (initialStockPrice * stockQuantity)) * 100.0;
            this.setState({
                profit: true,
                value: parseFloat(profit).toFixed(2),
                valuePercentage: parseFloat(profitPercentage).toFixed(2)
            })
        } else {
            this.setState({
                unChanged: true
            })
        }
    }

    render() {
        const { profit, loss, unChanged } = this.state; 
        return (
            <div className='right-section-wrapper'>
                <div className='right-section-input-wrapper'>
                    <InputComponent inputLabel="Inital Stock Price" handler={this.initialPriceHandler}/>
                    <InputComponent inputLabel="Quantity of Stocks" handler={this.stockQuantityHandler}/>
                    <InputComponent inputLabel="Current Stock Price" handler={this.currentPriceHandler}/>
                </div>
                <div className='right-section-btn-wrapper'>
                    <button>Check</button>
                </div>
                <div className='right-section-alert-wrapper'>
                    <AlertComponent profit={profit} loss={loss} unChanged={unChanged}/>
                </div>
            </div>
        )
    }
}

export default RightSection;