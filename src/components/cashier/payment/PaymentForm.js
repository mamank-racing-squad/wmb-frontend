import React, {useRef} from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {handleInputPay, resetPaymentForm} from "../../../actions/PaymentAction";
import { submitPayment} from "../../../services/PaymentService";
import {handleNumberFormatCurrency} from "../../../constants/Constanta";
import CurrencyFormat from "react-currency-format";
import {handleRespond} from "../../../constants/Alert";

class PaymentForm extends React.Component {

    render() {
        const orderToPaid = this.props.orderReducer.orderToPaid;
        const payment = this.props.paymentReducer.paymentInput;
        console.log(orderToPaid, payment);
        return (
            <div className="modal fade" id="modalForm" tabIndex="-" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detail Transaction</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                PIC Name
                                <div className="form-group">
                                    <input type="text" className="form-control" value={orderToPaid.costumerName}
                                           disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Costumer
                                    <input type="text" className="form-control" value={orderToPaid.totalCostumer}
                                           disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Price
                                    <input type="text" className="form-control"
                                           value={"Rp." + handleNumberFormatCurrency(orderToPaid.totalPrice)}
                                           disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Pay
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Rp.</div>
                                        </div>
                                        <CurrencyFormat decimalSeparator="," thousandSeparator="."
                                                        className="form-control"
                                                        placeholder="Enter customer money"
                                                        value={payment.pay}
                                                        onChange={(event) => this.handleInput(event)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                                    this.handleCheckout(orderToPaid)
                                }}>Checkout
                                </button>
                                {/*<iframe id="receipt" src={`/receipt/${orderToPaid.idOrder}`}*/}
                                {/*        style={{display: 'none'}} title="Receipt"/>*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleInput(event) {
        this.props.dispatch({...handleInputPay, pay: event.target.value})
    }

    handleCheckout= async (orderDetail)=> {
        let change = this.props.paymentReducer.paymentInput.pay.replace(/\D+/g, "") - orderDetail.totalPrice;
        await submitPayment(orderDetail.idOrder, this.props.paymentReducer.paymentInput)
            .then( async (respond) => {
                if (respond.status !== 200) handleRespond(respond.status, respond.message);
                if (respond.status === undefined) await handleRespond(200, "Payment Success", `Change : Rp. ${handleNumberFormatCurrency(change)}`)
                    .then(this.props.dispatch(resetPaymentForm)).then();
            })
            .then(this.props.fetchData)
        // await printIframe('receipt')
    }
}

const mapStateToProp = (state) => {
    return {...state}
};

export const printIframe = (id) => {
    const iframe = document.frames ? document.frames[id] : document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
};
export default connect(mapStateToProp)(PaymentForm);