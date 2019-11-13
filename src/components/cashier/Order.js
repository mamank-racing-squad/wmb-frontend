import React from 'react';
import '../../assets/css/Order.scss';

import {connect} from 'react-redux'
import styled from "styled-components";
import OrderList from "./OrderList";
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

    handleClearListMenu = () => {
        this.props.dispatch({type: "CLEAR_LIST_MENU"});
    };

    render() {
        console.log("ini props", this.props);

        return (
            <div className="orderBox">
                <div className="title">
                    <p>New Order</p>
                </div>
                <div className="customerBox">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Input PIC" required/>
                </div>
                <div className="form-group">
                <input type="number" className="form-control" placeholder="Input Number of Customers" required/>
                    </div>
                </div>
                {
                    this.props.orderDetails.map((element, index) => {
                        return <OrderList key={index} menuName={element.menuName} price={element.price} amount={element.amount} idMenu={element.idMenu} index={index}/>
                    })
                }
                <div className="checkoutBox">
                    <div>
                        <span>Total</span>
                        <span className="red">Totalnya</span>
                    </div>
                    <div>
                        <button className="clearBtn" onClick={this.handleClearListMenu}>Clear</button>
                        <button className="payBtn" onClick={this.checkout}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        orderDetails: [...state.orderReducer.orderDetails],
    }
);

export default connect(mapStateToProps)(Order);