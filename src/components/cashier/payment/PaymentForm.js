import React, {useRef} from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {handleInputPay, resetPaymentForm} from "./PaymentAction";
import {submitPayment} from "./PaymentService";
import {handleNumberFormatCurrency} from "../../admin/menu/MenuAction";

export const printIframe = (id) => {
    const iframe = document.frames ? document.frames[id] : document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
};
class PaymentForm extends React.Component {

    render() {
        const orderDetail = this.props.orderDetail;
        console.log(this.props);
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
                                    <input type="text" className="form-control" value={this.props.receipt.costumerName} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Costumer
                                    <input type="text" className="form-control" value={this.props.receipt.totalCostumer} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Total Price
                                    <input type="text" className="form-control" value={"Rp." + handleNumberFormatCurrency(this.props.receipt.totalPrice)} disabled={true}/>
                                </div>
                                <div className="form-group">
                                    Pay
                                    <input type="number" className="form-control" value={this.props.paymentInput.pay} autoFocus={true} onChange={(event)=>this.handleInput(event)} required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{this.handleCheckout(this.props.receipt)}}>Checkout</button>
                                <iframe id="receipt" src={`/receipt/${this.props.receipt.idOrder}`} style={{display: 'none'}} title="Receipt" />
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