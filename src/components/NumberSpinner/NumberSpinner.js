import React from 'react';
import './NumberSpinner.scss';
import PropTypes from 'prop-types';
import upIcon from './up-arrow.png'
import downIcon from './angle-arrow-down.png'

class NumberSpinner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="numberSpinnerBox">
                <span>{this.props.number}</span>
                <div className="btn_wrapper">
                    <button className="up" onClick={this.props.handleUpClick}><img src={upIcon} /></button>
                    <button className="down" onClick={this.props.handleDownClick}><img src={downIcon} /></button>
                </div>
            </div>
        )
    }
}

NumberSpinner.propTypes = {
    number: PropTypes.number,
    handleUpClick: PropTypes.func,
    handleDownClick: PropTypes.func,

}

export default NumberSpinner;