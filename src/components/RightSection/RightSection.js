import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import './RightSection.css';

class RightSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialStockPrice: "",
            stockQuantity: 0,
            currentStockPrice: ""
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

    render() {
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
            </div>
        )
    }
}

export default RightSection;