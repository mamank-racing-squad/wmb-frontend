import React from 'react';
import PropTypes from 'prop-types';
import './OrderList.scss';
import deleteIcon from './garbage.png';

import NumberSpinner from '../NumberSpinner/NumberSpinner'
import { withRouter } from 'react-router-dom'
import * as action from '../../action'
import { connect } from 'react-redux'

class OrderList extends React.Component {
    constructor(props) {
        super(props);
    }
    handleUpClick = () => {
        var number = this.props.number
        this.props.updateSelectedItemQuantity(
            {
                name: this.props.name,
                quantity: ++number
            }
        )
    }

    handleDownClick = () => {
        var number = this.props.number

        if (number > 1) {

            this.props.updateSelectedItemQuantity(
                {
                    name: this.props.name,
                    quantity: --number
                }
            )

        }
    }
    render() {
        return (
            <div className="orderList">
                <button className="deleteBtn" onClick={this.props.handleDelete}>
                    <img src={deleteIcon} />
                </button>
                <div className="column-1">
                    <p className="item_name">{this.props.name}</p>
                    <p className="unit_price">{this.props.unitPrice}</p>
                </div>
                <div className="column-2">
                    <NumberSpinner number={this.props.number} handleUpClick={this.handleUpClick} handleDownClick={this.handleDownClick} />
                    <div className="subtotal">{this.props.number * this.props.unitPrice}</div>
                </div>
            </div>
        )
    }
}
OrderList.propTypes = {
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    handleDelete: PropTypes.func,
    number: PropTypes.number
}
const mapStateToProps = store => (
  {
    selectedItem: store.selectedItem,
    foods: store.foods,
    drinks: store.drinks
  }
)

export default withRouter(connect(null, action)(OrderList))