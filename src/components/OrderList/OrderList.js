import React from 'react';
import './OrderList.scss';
import deleteIcon from '../../images/garbage.png';

import AmountControl from '../AmountControl/AmountControl'
import { withRouter } from 'react-router-dom'
import * as action from '../../action'
import { connect } from 'react-redux'

class OrderList extends React.Component {
    constructor(props) {
        super(props);
    }
    handleIncreaseAmount = () => {
        let number = this.props.number;
        this.props.updateSelectedItemQuantity(
            {
                name: this.props.name,
                quantity: ++number
            }
        )
    };

    handleDecreaseAmount = () => {
        let number = this.props.number;

        if (number > 1) {

            this.props.updateSelectedItemQuantity(
                {
                    name: this.props.name,
                    quantity: --number
                }
            )

        }
    };
    render() {
        return (
            <div className="orderList">
                <div>
                    <button className="deleteBtn" onClick={this.props.handleDelete}>
                        <img src={deleteIcon} />
                    </button>
                    <div className="column-1">
                        <p className="item_name">{this.props.name}</p>
                        <p className="unit_price">IDR. {this.props.unitPrice}</p>
                    </div>
                    <div className="column-2">
                        <AmountControl number={this.props.number} handleUpClick={this.handleIncreaseAmount} handleDownClick={this.handleDecreaseAmount} />
                    </div>
                </div>
                <div className="subtotal">IDR. {this.props.number * this.props.unitPrice}</div>
            </div>
        )
    }
}

const mapStateToProps = store => (
  {
    selectedItem: store.selectedItem,
    foods: store.foods,
    drinks: store.drinks
  }
);

export default withRouter(connect(null, action)(OrderList))