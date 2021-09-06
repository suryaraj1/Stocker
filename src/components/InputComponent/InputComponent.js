import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    onChangeHandler = event => {
        this.setState({
            inputValue: event.target.value
        }, () => {
            const { handler } = this.props;
            const { inputValue } = this.state;
            handler(inputValue);
        })
    }

    render() {
        const { inputLabel } = this.props;
        return (
            <div className='input-component-wrapper'>
                <p className='input-component-label'>{inputLabel}</p>
                <input className="input-box" type="number" onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default InputComponent;