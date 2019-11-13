import React, {Component} from 'react';
import DiningTable from "../dining-table/DiningTable";
import {NavLink} from "react-router-dom";
import diningTable from "../../../assets/images/table.png";
import diningTableGray from "../../../assets/images/table-gray.png";
import food from "../../../assets/images/salad.png";
import foodGray from "../../../assets/images/salad-gray.png";
import payment from "../../../assets/images/payment.png";
import paymentGray from "../../../assets/images/payment-gray.png";
import admin from "../../../assets/images/admin.png";
import adminGray from "../../../assets/images/admin-gray.png";
import PaymentTopBar from "./PaymentTopBar";
import {fetchDiningTable} from "../../../services/DiningTableService";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchingDiningTablesFromPayment, fetchingOrderSuccess} from "./PaymentAction";
import DiningTableToPaid from "./DiningTableToPaid";
import {getUnpaidOrder, submitPayment} from "./PaymentService";
import {submitMenu} from "../../../services/MenuService";
import {resetMenuForm} from "../../admin/menu/MenuAction";


class PaymentContainer extends Component {

    render() {
        console.log(this.props);
        const diningTableToPaid = this.props.unpaidOrder.map((element, index) => {
            return <DiningTableToPaid
                key={index}
                idDiningTable={element.diningTable.idDiningTable}
                numberDiningTable={element.diningTable.numberDiningTable}
                isSelected={element.diningTable.availability}
                unpaidOrder={element}
                fetchData={this.fetchDataPayment}
            />;
        });
        return (
            <div>
                <div className="Nav">
                    <NavLink exact to="/dining-table" activeClassName="active" className="dining-table">
                        {
                            this.props.match && this.props.match.params.type === 'dining-table' ?
                                <img src={diningTable} alt="Cashier"/> :
                                <img src={diningTableGray} alt="Cashier"/>
                        }
                        <span>Dining</span>
                        <span style={{paddingTop: "5px"}}>Table</span>
                    </NavLink>
                    <NavLink exact to="/foods" activeClassName="active" className="foods">
                        {
                            this.props.match && this.props.match.params.type === 'foods' ?
                                <img src={food} alt="Cashier"/> :
                                <img src={foodGray} alt="Cashier"/>
                        }
                        <span>Menu</span>
                    </NavLink>
                    <NavLink to="/payment" activeClassName="active" className="payment">
                        {
                            this.props.match && this.props.match.params.type === 'payment' ?
                                <img src={payment} alt="Cashier"/> :
                                <img src={paymentGray} alt="Cashier"/>
                        }
                        <span>Payment</span>
                    </NavLink>
                    <NavLink to="/admin/dining-table" activeClassName="active" className="menu-category" onClick={this.handleClearListMenu}>
                        {
                            this.props.match && this.props.match.params.type === '/admin' ?
                                <img src={admin} alt="Cashier"/> :
                                <img src={adminGray} alt="Cashier"/>
                        }
                        <span>Admin</span>
                    </NavLink>
                </div>
                <div className="right-wrapper">
                    <PaymentTopBar/>
                    <div>
                        <div className="items_wrapper_payment ">
                            {diningTableToPaid}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount() {
        this.fetchDataPayment();
    }

    fetchDataPayment = async () => {
        const data = await getUnpaidOrder();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchingOrderSuccess, payload: data})
        }
    };

    handleSubmitData = (orderDetail) => {
        submitPayment(orderDetail.idOrder, this.props.paymentInput)
            .then(this.fetchDataPayment)
            .then(this.props.dispatch(resetMenuForm));
    }
}

const mapStateToProps = (state) => {
    return {...state.paymentReducer}
}

export default withRouter(connect(mapStateToProps)(PaymentContainer));