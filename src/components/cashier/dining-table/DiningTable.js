import React from 'react';
import '../../../assets/css/DiningTable.scss';

import diningTable from '../../assets/images/dining-table.png';
import tick from '../../assets/images/tick.png'
import {connect} from 'react-redux'
import * as action from '../../action/action'
import {withRouter} from 'react-router-dom'

class DiningTable extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = () => {
    };

    render() {
        return (
            <div onClick={this.props.handleClick}
                 className={this.props.isSelected ? 'FoodItemBox selected' : 'FoodItemBox'}>
                <img className="itemImage" src={diningTable} alt={"image"}/>
                {this.props.isSelected ?
                    <label>
                        <im src={tick}/>
                    </label>
                    : null
                }

                <input type="checkbox" checked={this.props.isSelected} value={this.props.isSelected}
                       onChange={this.handleChange}/>
                <span className="priceTag">{'IDR. ' + this.props.price}</span>
                <span className="itemNameTag">{this.props.item_name}</span>
            </div>
        )
    }
}

const mapStateToProps = store => (
    {
        selectedItem: store.selectedItem,
        foods: store.foods,
        drinks: store.drinks
    }
);

export default withRouter(connect(mapStateToProps, action)(DiningTable))