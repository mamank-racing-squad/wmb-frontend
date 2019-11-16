import React from 'react';
import '../../../assets/css/Order.scss';
import {connect} from 'react-redux'
import OrderList from "./OrderList";
import {submitOrder} from "../../../services/OrderService";
import {
    handleCostumerNameOrder,
    handleDescriptionOrder,
    handleNumberDiningTable,
    handleTotalCostumerName,
    resetOrder
} from "../../../actions/OrderAction";
import NavLink from "react-router-dom/NavLink";
import { FaPlusCircle } from 'react-icons/fa';
import {handleNumberFormatCurrency} from "../../../constants/Constanta";
import {handleRespond} from "../../../constants/Alert";

class OrderContainer extends React.Component {

    render() {
        return (
            <div className="orderBox">
                <div className="title">
                    <p>New Order</p>
                </div>
                <div className="customerBox">
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.props.orderForm.costumerName}
                               onChange={this.handleCostumerName} placeholder="Input PIC" required/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" value={this.props.orderForm.totalCostumer}
                               onChange={this.handleTotalCostumer} placeholder="Input Number of Customers" required/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="No Tables"
                                       onChange={this.handleDiningNumber} disabled required
                                       value={"Number : " + this.props.orderForm.numberDiningTable}/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="No Tables"
                                       onChange={this.handleDiningNumber} disabled required
                                       value={"Capacity : " + this.props.orderForm.capacity}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={this.handleDescription}
                            value={this.props.orderForm.description}
                            className="form-control"
                            rows="2"
                        />
                    </div>
                    <div className="form-group">
                        <NavLink exact to="/foods">
                            <button className="addMenu"><FaPlusCircle/>    Add Menu</button>
                        </NavLink>
                    </div>
                </div>
                {
                    this.props.orderDetails.map((element, index) => {
                        return <OrderList key={index} menuName={element.menuName} price={element.price}
                                          amount={element.amount} idMenu={element.idMenu}
                                          numberDiningTable={element.numberDiningTable} index={index}/>
                    })
                }
                <div className="checkoutBox">
                    <div>
                        <span>Total</span>
                        <span className="red">Rp. {this.handleTotalPrice()}</span>
                    </div>
                    <div>
                        <button className="clearBtn" onClick={this.handleClearListMenu}>Clear</button>
                        <button className="payBtn" onClick={this.handleSubmitData}>Order</button>
                    </div>
                </div>
            </div>
        )
    }

    handleCostumerName = (event) => {
        this.props.dispatch({...handleCostumerNameOrder, payload: event.target.value})
    };

    handleTotalCostumer = (event) => {
        this.props.dispatch({...handleTotalCostumerName, payload: event.target.value})
    };

    handleDiningNumber = (event) => {
        this.props.dispatch({...handleNumberDiningTable, payload: event.target.value})
    };

    handleDescription = (event) => {
        this.props.dispatch({...handleDescriptionOrder, payload: event.target.value})
    };


    handleTotalPrice = () => {
        let totalPrice = 0;
        for (let orderDetail of this.props.orderDetails) {
            totalPrice += orderDetail.price * orderDetail.amount;
        }
        return handleNumberFormatCurrency(totalPrice);
    };

    handleSubmitData = () => {
        submitOrder(this.props.orderForm, this.props.orderDetails)
            .then((respond) => {
                if (respond.status !== 200) handleRespond(respond.status, respond.message);
                if (respond.status === undefined) handleRespond(200, "Your data has been saved")
                    .then(this.props.dispatch(resetOrder));
            })
            .then(()=>{this.props.handleSubmit()});
    };

    handleClearListMenu = () => {
        this.props.dispatch(resetOrder);
    };
}

const mapStateToProps = (state) => (
    {
        orderForm: {...state.orderReducer.orderForm},
        orderDetails: [...state.orderReducer.orderDetails],
    }
);

export default connect(mapStateToProps)(OrderContainer);