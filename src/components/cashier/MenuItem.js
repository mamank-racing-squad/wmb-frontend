import React from 'react';
import '../../assets/css/MenuItem.scss';

import tick from '../../assets/images/tick.png'
import {connect} from "react-redux";
import {handleNumberFormatCurrency} from "../admin/menu/MenuAction";
import pizza from '../../assets/images/Pizza.jpg';

class MenuItem extends React.Component {
    handleClick = (data) => {
        if (this.props.orderDetails.length === 0) {
            return this.props.dispatch({type: "ADD_SELECTED_MENU", payload: {...data, amount: 1}});
        } else {
            if (!this.handleMenuIsExist(data.idMenu)) return this.props.dispatch({type: "ADD_SELECTED_MENU", payload: {...data, amount: 1}});
            else this.props.dispatch({type: "REMOVE_SELECTED_MENU", idMenu: data.idMenu});
        }
    };

    handleMenuIsExist (value) {
        let isExist = false;
        this.props.orderDetails.forEach(function (element) {
            if (element.idMenu === value) isExist = true;
        });
        return isExist
    };

    render() {
        return (
            <div onClick={() => {this.handleClick(this.props)}}
                 className={this.props.isSelected ? 'FoodItemBox selected' : 'FoodItemBox'}
            >
                <img className="itemImage" src={`http://localhost/menu-img/${this.props.idMenu}.jpg`} alt="Menu Item Images"/>
                {this.props.isSelected ?
                    <label>
                        <img src={tick} alt="Menu Item"/>
                    </label>
                    : null
                }
                <span className="priceTag">{'IDR. ' + handleNumberFormatCurrency(this.props.price)}</span>
                <span className="itemNameTag">{this.props.menuName}</span>
            </div>
        )
    }
}

export default connect()(MenuItem);