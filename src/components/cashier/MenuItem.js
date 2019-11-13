import React from 'react';
import '../../assets/css/MenuItem.scss';

import tick from '../../assets/images/tick.png'
import {connect} from "react-redux";
import {handleNumberFormatCurrency} from "../admin/menu/MenuAction";
import pizza from '../../assets/images/Pizza.jpg';

class MenuItem extends React.Component {

    isTrue = false;

    handleClick = (data) => {
        if (this.props.orderDetails.length === 0) {
            return this.props.dispatch({type: "ADD_SELECTED_MENU", payload: {...data, amount: 1}});
        } else {
            let idMenu = data.idMenu;
            let isExist = this.isTrue;
            this.props.orderDetails.forEach(function (element) {
               if (element.idMenu === idMenu) isExist = true;
            });
            if (!isExist) return this.props.dispatch({type: "ADD_SELECTED_MENU", payload: {...data, amount: 1}});
            else {
                this.props.dispatch({type: "REMOVE_SELECTED_MENU", idMenu: data.idMenu});
            }
        }
    };

    render() {
        return (
            <div onClick={() => {this.handleClick(this.props)}}
                 className={this.isTrue ? 'FoodItemBox selected' : 'FoodItemBox'}>
                <img className="itemImage" src={pizza} alt="Menu Item Images"/>
                {/*<img className="itemImage" src={`http://localhost/menu-image/${this.props.idMenu}.jpg`} alt="Menu Item Images"/>*/}
                {this.isTrue ?
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