import React from 'react';
import '../../../assets/css/DiningTable.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'
import {connect} from "react-redux";
import {handleRespond} from "../../../constants/Alert";


class DiningTableContainer extends React.Component {

    render() {
        return (
            <div onClick={() => {
                this.handleClick(this.props)
            }}
                 className={this.props.isSelected ? 'diningTableBox' : 'diningTableBox table-selected'}>
                <img className="itemImage" src={diningTable} alt="Dining Table"/>
                {/*{this.props.isSelected ?*/}
                {/*    <label>*/}
                {/*        <img src={tick}/>*/}
                {/*    </label>*/}
                {/*    : null*/}
                {/*}*/}
                <span className="capacity">Slot : {this.props.capacity}</span>
                <span className="numberDiningTable">Number : {this.props.numberDiningTable}</span>
            </div>
        )
    }

    handleClick = (data) => {
        if (data.isSelected) {
            this.props.dispatch({type: "ADD_SELECTED_TABLE", payload: data})
        } else {
            handleRespond(400, "Sorry, table in use !");
        }
    };
}

export default connect()(DiningTableContainer);