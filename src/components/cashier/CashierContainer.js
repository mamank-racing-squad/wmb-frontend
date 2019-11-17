import React from 'react';
import {NavLink, Route} from "react-router-dom";
import '../../assets/css/App.scss';
import food from '../../assets/images/salad.png';
import foodGray from '../../assets/images/salad-gray.png';
import admin from '../../assets/images/admin.png';
import adminGray from '../../assets/images/admin-gray.png';
import diningTable from '../../assets/images/table.png';
import diningTableGray from '../../assets/images/table-gray.png';
import payment from '../../assets/images/payment.png'
import paymentGray from '../../assets/images/payment-gray.png'
import Topbar from './Topbar'
import Order from './order/OrderContainer'
import {connect} from 'react-redux'
import MenuItem from "./menu/MenuContainer";
import DiningTable from "./dining-table/DiningTableContainer";
import {fetchDiningTable} from "../../services/DiningTableService";
import {fetchDiningTableSuccess} from "../../actions/DiningTableAction";
import {fetchMenu} from "./../../services/MenuService";
import {fetchMenuSuccess} from "../../actions/MenuAction";
import {Redirect} from "react-router";
import {handleRespond} from "../../constants/Alert";

export class CashierContainer extends React.Component {
    render() {
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
                    <NavLink to="/admin/dining-table" activeClassName="active" className="menu-category"
                             onClick={this.handleClearListMenu}>
                        {
                            this.props.match && this.props.match.params.type === '/admin' ?
                                <img src={admin} alt="Cashier"/> :
                                <img src={adminGray} alt="Cashier"/>
                        }
                        <span>Admin</span>
                    </NavLink>
                </div>

                <div className="right-wrapper">
                    <Topbar {...this.props}/>
                    <div className="items_wrapper">
                        <Route path="/foods" render={() => this.props.listMenu.map((item, key) => {
                            if (this.props.orderForm.numberDiningTable === "Select Table") {
                                // return handleRespond(400, "Please selected dining table")
                            }
                            return (
                                    <MenuItem
                                        key={key}
                                        idMenu={item.idMenu}
                                        menuName={item.menuName}
                                        price={item.price}
                                        orderDetails={this.props.orderDetails}
                                    />
                                )
                            }
                        )}/>

                        <Route path="/dining-table" render={() => this.props.diningTables.map((item, key) => {
                                return (
                                    <DiningTable
                                        key={key}
                                        idDiningTable={item.idDiningTable}
                                        numberDiningTable={item.numberDiningTable}
                                        capacity={item.capacity}
                                        isAvailable={item.isAvailable}
                                    />
                                )
                            }
                        )}/>
                    </div>
                    <Order handleSubmit={this.fetchDataDiningTable}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchDataMenu();
        this.fetchDataDiningTable();
    }

    handleClearListMenu = () => {
        this.props.dispatch({type: "CLEAR_LIST_MENU"});
    };

    fetchDataMenu = async () => {
        const data = await fetchMenu();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchMenuSuccess, payload: data})
        }
    };


    fetchDataDiningTable = async () => {
        const data = await fetchDiningTable();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchDiningTableSuccess, payload: data})
        }
    }
}

const mapStateToProps = (state) => (
    {
        orderForm: {...state.orderReducer.orderForm},
        orderDetails: state.orderReducer.orderDetails,
        listMenu: state.menuReducer.listMenu,
        diningTables: state.diningTableReducer.diningTables,
    }
);

export default connect(mapStateToProps)(CashierContainer)