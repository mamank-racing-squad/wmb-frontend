import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {handleInputPay, resetPaymentForm} from "./PaymentAction";
import {submitPayment} from "./PaymentService";
import {handleNumberFormatCurrency} from "../../admin/menu/MenuAction";

class PaymentForm extends React.Component {

    render() {
        const orderDetail = this.props.orderDetail;
        return (
            <div className="modal fade" id="modalForm" tabIndex="-" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detail Transaction</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                PIC Name
                                <div className="form-group">
                                    <input type="text" className="form-control" value={orderDetail.costumerName} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Costumer
                                    <input type="text" className="form-control" value={orderDetail.totalCostumer} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Price
                                    <input type="text" className="form-control" value={"Rp." + handleNumberFormatCurrency(orderDetail.totalPrice)} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Pay
                                    <input type="text" className="form-control" value={this.props.paymentInput.pay} autoFocus={true} onChange={(event)=>this.handleInput(event)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{this.handleCheckout(orderDetail)}}>Checkout</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleInput(event) {
        this.props.dispatch({...handleInputPay, pay:event.target.value})
    }

    handleCheckout(orderDetail) {
        submitPayment(orderDetail.idOrder, this.props.paymentInput, orderDetail.totalPrice).then(this.props.fetchData).then(this.props.dispatch(resetPaymentForm))
    }
}

const mapStateToProp=(state)=>{
    return {...state.paymentReducer}
};

export default connect(mapStateToProp)(PaymentForm);