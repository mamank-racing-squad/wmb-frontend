import React from 'react';
import '../../../assets/css/DiningTableToPaid.scss';

import diningTable from '../../../assets/images/dining-table.png';
import PaymentForm from "./PaymentForm";
import {getOrderById} from "../../../services/OrderService";
import {connect} from "react-redux";
import {fetchingOrderDetailSuccess} from "../../../actions/OrderAction";


export class DiningTableToPaid extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="container">
            <div onClick={() => {
                this.handleClick(this.props.idOrder)
            }} className={this.props.isSelected ? 'diningTableBoxToPaid' : 'diningTableBoxToPaid selected'}
                data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">
                    <img className="itemImage" src={diningTable} alt="Dining Table"/>
                    <span className="capacity">{this.props.costumerName}</span>
                    <span className="numberDiningTable">Number : {this.props.numberDiningTable}</span>
                </div>
                <PaymentForm orderDetail={this.props.unpaidOrder} fetchData={this.props.fetchData}/>
            </div>



        )
    }

    handleClick = async (id) => {
        const data = await getOrderById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...fetchingOrderDetailSuccess, payload: data})
        }
    };
}

const mapStateToProps = (state) => {
    return {...state.orderReducer}
};

export default connect(mapStateToProps)(DiningTableToPaid);