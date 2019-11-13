import React from 'react';
import '../../../assets/css/DiningTableToPaid.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'
import PaymentForm from "./PaymentForm";


class DiningTableToPaid extends React.Component {

    handleClick = () => {

    };

    render() {
        return (
            <div onClick={this.handleClick} className={this.props.isSelected ? 'diningTableBoxToPaid' : 'diningTableBoxToPaid selected'}>
                <div data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">
                    <img className="itemImage" src={diningTable} alt="Dining Table"/>
                    {this.props.isSelected ?
                        null
                        :
                        <label>
                            <img src={tick} alt="check"/>
                        </label>
                    }
                    <input type="checkbox" checked={this.props.isSelected} value={this.props.isSelected}
                           onChange={this.handleChange}/>
                    <span className="numberDiningTable">Nomor : {this.props.numberDiningTable}</span>
                </div>
                <PaymentForm orderDetail={this.props.unpaidOrder} fetchData={this.props.fetchData}/>
            </div>
        )
    }
}

export default DiningTableToPaid;