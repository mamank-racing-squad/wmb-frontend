import React from 'react';
import '../../../assets/css/DiningTableToPaid.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'
import PaymentForm from "./PaymentForm";
import {getTrxById} from "./PaymentService";
import {fetchingOrderDetailSuccess} from "./PaymentAction";
import {connect} from "react-redux";


class DiningTableToPaid extends React.Component {

    handleClick = async (id) => {
        const data = await getTrxById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...fetchingOrderDetailSuccess, payload: data})
        }
    };

    render() {
        return (
            <div>
                <div onClick={() => {
                    this.handleClick(this.props.idOrder)
                }} className={this.props.isSelected ? 'diningTableBoxToPaid' : 'diningTableBoxToPaid selected'}
                     data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">
                    <img className="itemImage" src={diningTable} alt="Dining Table"/>
                    <span value={this.props.isSelected}
                          onChange={this.handleChange}/>
                    <span className="numberDiningTable">Nomor : {this.props.numberDiningTable}</span>
                </div>
                <PaymentForm orderDetail={this.props.unpaidOrder} fetchData={this.props.fetchData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.paymentReducer}
}
export default connect(mapStateToProps)(DiningTableToPaid);