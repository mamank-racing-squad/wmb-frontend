import React from 'react';
import '../../assets/css/OrderList.scss';
import deleteIcon from '../../assets/images/garbage.png';

import AmountControl from './AmountControl'
import {connect} from "react-redux";
import {handleNumberFormatCurrency} from "../admin/menu/MenuAction";

class OrderList extends React.Component {
    handleIncreaseAmount = () => {
        this.props.dispatch({type: "INCREMENT_AMOUNT_MENU", index: this.props.index});
    };

    handleDecreaseAmount = () => {
            if (this.props.amount <= 1) {
                return;
            }
        this.props.dispatch({type: "DECREMENT_AMOUNT_MENU", index: this.props.index});
    };

    handleRemoveOrder = () => {
        this.props.dispatch({type: "REMOVE_SELECTED_MENU", idMenu: this.props.idMenu});
    };

    render() {
        return (
            <div className="orderList">
                <div>
                    <button  className="deleteBtn" onClick={this.handleRemoveOrder}>
                        <img src={deleteIcon}  alt="Order List"/>
                    </button>
                    <div className="column-1">
                        <p className="item_name">{this.props.menuName}</p>
                        <p className="unit_price">IDR. {handleNumberFormatCurrency(this.props.price)}</p>
                    </div>
                    <div className="column-2">
                        <AmountControl number={this.props.amount} handleUpClick={this.handleIncreaseAmount} handleDownClick={this.handleDecreaseAmount} />
                    </div>
                </div>
                <div className="subtotal">IDR. {handleNumberFormatCurrency(this.props.price * this.props.amount)}</div>
            </div>
        )
    }
}

export default connect()(OrderList);