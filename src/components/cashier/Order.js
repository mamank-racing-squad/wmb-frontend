import React from 'react';
import '../../assets/css/Order.scss';

import OrderList from './OrderList'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../action/action'
import styled from "styled-components";
const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(1em + .75rem + 2px);
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SubTotal: 0,
            DayEvent_discount: '0',
            isDayEvent: false
        }
    }

    handleDelete = (item) => {
        this.props.onItemUnselected({
            name: item.name
        });
        if (item.type === 'food') {
            this.props.updateIsSelectedForFood({
                name: item.name,
                isSelected: false
            })
        } else {
            this.props.updateIsSelectedForDrink({
                name: item.name,
                isSelected: false
            })
        }
    };
    handleDayEvent = () => {
        this.setState({
            isDayEvent: !this.state.isDayEvent
        }, function () {
            if (this.state.isDayEvent) {
                this.setState({
                    DayEvent_discount: '- 20%'
                })
            } else {
                this.setState({
                    DayEvent_discount: '0'
                })
            }
        })
    };
    checkout = () => {
        this.props.clearSelectedItems();
        this.props.setDefaultFoods();
        this.props.setDefaultDrinks();
    };

    clearOrder = () => {
        this.props.clearSelectedItems();
        this.props.setDefaultFoods();
        this.props.setDefaultDrinks();
    };

    render() {
        let {selectedItem} = this.props;

        let subtotal = 0, total = 0;
        selectedItem.map((item) => {
            subtotal += item.price * item.quantity;
        });

        total = (this.state.isDayEvent) ? subtotal * 0.8 : subtotal;
        return (
            <div className="orderBox">
                <div className="title">
                    <p>New Order</p>
                </div>
                <Input type="text" placeholder="PIC"/>
                <Input type="text" placeholder="Voucher"/>

                {selectedItem && selectedItem.map((item, key) => {
                    return (
                        <OrderList name={item.name} unitPrice={item.price} number={item.quantity}
                                   handleDelete={() => this.handleDelete(item)} key={key}/>
                    )
                })}
                <div className="checkoutBox">

                    <div>
                        <span>Subtotal</span>
                        <span className="subtotal">{subtotal}</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={this.state.isDayEvent} onChange={this.handleDayEvent}/>
                        <span>Discount event</span>
                        <span className="red">{this.state.DayEvent_discount}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span className="red">{total}</span>
                    </div>
                    <div>
                        <button className="clearBtn" onClick={this.clearOrder}>Clear</button>
                        <button className="payBtn" onClick={this.checkout}>Checkout</button>
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

export default withRouter(connect(mapStateToProps, action)(Order))