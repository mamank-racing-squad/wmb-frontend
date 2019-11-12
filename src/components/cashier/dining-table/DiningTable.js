import React from 'react';
import '../../../assets/css/DiningTable.scss';

import diningTable from '../../../assets/images/dining-table.png';
import tick from '../../../assets/images/tick.png'


class DiningTable extends React.Component {

    handleChange = () => {
    };

    render() {
        return (
            <div onClick={this.props.handleClick}
                 className={this.props.isSelected ? 'diningTableBox selected' : 'diningTableBox'}>
                <img className="itemImage" src={diningTable} alt="Dining Table"/>
                {this.props.isSelected ?
                    <label>
                        <img src={tick} alt="check"/>
                    </label>
                    : null
                }

                <input type="checkbox" checked={this.props.isSelected} value={this.props.isSelected}
                       onChange={this.handleChange}/>
                <span className="capacity">Slot : {this.props.capacity}</span>
                <span className="numberDiningTable">Nomor : {this.props.numberDiningTable}</span>
            </div>
        )
    }
}

export default (DiningTable);