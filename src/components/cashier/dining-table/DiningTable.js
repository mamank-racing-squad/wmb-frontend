import React from 'react';
import '../../../assets/css/DiningTable.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'
import {connect} from "react-redux";
import Swal from "sweetalert2";


class DiningTable extends React.Component {

    handleClick = (data) => {
        if (data.isSelected) {
            this.props.dispatch({type: "ADD_SELECTED_TABLE", payload : data})
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Table In Use',
                showConfirmButton: true
            })
        }
    };

    render() {
        return (
            <div onClick={()=> {this.handleClick(this.props)}}
                 className={this.props.isSelected ? 'diningTableBox' :  'diningTableBox selected'}>
                <img className="itemImage" src={diningTable} alt="Dining Table"/>

                <span className="capacity">Slot : {this.props.capacity}</span>
                <span className="numberDiningTable">Nomor : {this.props.numberDiningTable}</span>
            </div>
        )
    }
}

export default connect()(DiningTable);