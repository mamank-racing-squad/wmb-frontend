import React from 'react';
import '../../../assets/css/DiningTable.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'
import {connect} from "react-redux";
import {handleRespond} from "../../../constants/Alert";


class DiningTableContainer extends React.Component {

    render() {
        return (
            <div onClick={() => {this.handleClick(this.props)}}
                 className={this.handleMenuIsExist(this.props.idDiningTable) || !this.props.isAvailable ? 'diningTableBox table-selected' : 'diningTableBox'}>
                <img className="itemImage" src={diningTable} alt="Dining Table"/>
                {this.handleMenuIsExist(this.props.idDiningTable) ?
                    <label>
                        <img src={tick} alt="Dining Table Selected"/>
                    </label>
                    : null
                }
                <span className="capacity">Slot : {this.props.capacity}</span>
                <span className="numberDiningTable">Number : {this.props.numberDiningTable}</span>
            </div>
        )
    }

    handleClick = (data) => {
        if (!data.isAvailable){
            handleRespond(400, "Sorry, table in use !");
        } else if (data.idDiningTable !== this.props.orderForm.idDiningTable) {
            this.props.dispatch({type: "ADD_SELECTED_TABLE", payload: data})
        }
        else {
            this.props.dispatch({type: "REMOVE_SELECTED_TABLE"});
        }
    };

    handleMenuIsExist (value) {
        let isExist = false;
        if (value === this.props.orderForm.idDiningTable) {
            isExist = true;
        }
        return isExist
    };
}

const mapStateToProps = (state) => (
    {
        orderForm : {...state.orderReducer.orderForm}
    }
);

export default connect(mapStateToProps)(DiningTableContainer);