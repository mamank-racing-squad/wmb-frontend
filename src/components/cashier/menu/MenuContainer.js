import React from 'react';
import '../../../assets/css/MenuItem.scss';

import tick from '../../../assets/images/tick.png'
import {connect} from "react-redux";
import pizza from '../../../assets/images/Pizza.jpg';
import {handleNumberFormatCurrency} from "../../../constants/Constanta";

class MenuContainer extends React.Component {

    render() {
        return (
            <div onClick={() => {this.handleClick(this.props)}}
                 className={this.handleMenuIsExist(this.props.idMenu) ? 'FoodItemBox selected' : 'FoodItemBox'}>
                <img className="itemImage" src={`http://localhost/menu-image/${this.props.idMenu}.jpg`} alt="Menu Item Images"/>
                {this.handleMenuIsExist(this.props.idMenu) ?
                    <label>
                        <img src={tick} alt="Menu Item"/>
                    </label>
                    : null
                }
                <span className="priceTag">{'Rp. ' + handleNumberFormatCurrency(this.props.price)}</span>
                <span className="itemNameTag">{this.props.menuName}</span>
            </div>
        )
    }

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
}

export default connect()(MenuContainer);
