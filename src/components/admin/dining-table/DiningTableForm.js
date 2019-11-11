import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import OrderList from '../OrderList'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../../action/action'

class DiningTableForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SubTotal: 0,
            DayEvent_discount: '0',
            isDayEvent: false
        }
    }

    render() {
        return (
            <div className="orderBox">
                <div className="title">
                    <p>Input Dining Table</p>
                </div>
                <div className="checkoutBox">
                    <div>
                        <span>Subtotal</span>
                        <span className="subtotal"></span>
                    </div>
                    <div>
                        <input type="checkbox" checked={this.state.isDayEvent} onChange={this.handleDayEvent}/>
                        <span>Discount event</span>
                        <span className="red">{this.state.DayEvent_discount}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span className="red"></span>
                    </div>
                    <div>
                        <button className="clearBtn" onClick={this.clearOrder}>Edit</button>
                        <button className="payBtn" onClick={this.checkout}>Save</button>
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps, action)(DiningTableForm))