import React from 'react';
import '../../../assets/css/DiningTable.scss';

import tick from '../../images/tick.png'
import {connect} from 'react-redux'
import * as action from '../../action/action'
import {withRouter} from 'react-router-dom'
import Order from "./DiningTableForm";

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
                <img className="itemImage" src={this.props.item_image} alt={"image"}/>
                {this.props.isSelected ?
                    <label>
                        <img src={tick}/>
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