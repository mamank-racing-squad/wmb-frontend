import React from 'react';
import '../../../assets/css/AmountControl.scss';
import upIcon from '../../../assets/images/up-arrow.png'
import downIcon from '../../../assets/images/angle-arrow-down.png'

class AmountControl extends React.Component {
    render() {
        return (
            <div className="numberSpinnerBox">
                <span>{this.props.number}</span>
                <div className="btn_wrapper">
                    <button className="up" onClick={this.props.handleUpClick}><img src={upIcon}  alt="Increase"/></button>
                    <button className="down" onClick={this.props.handleDownClick}><img src={downIcon}  alt="Decrease"/></button>
                </div>
            </div>
        )
    }
}

export default AmountControl;