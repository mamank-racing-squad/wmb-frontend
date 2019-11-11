import React from 'react';
import '../../../assets/css/DiningTable.scss';

import OrderList from '../OrderList'
import styled, {css} from "styled-components";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../../action/action'


class MenuCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SubTotal: 0,
            DayEvent_discount: '0',
            isDayEvent: false
        }
    }

    render() {
        return (
                <div className="orderBox">
                    <div className="title">
                        <p>Input Menu Category</p>
                    </div>
                    <div className="checkoutBox">
                        <input type="text" placeholder="ID" disabled="true"/>
                        <input type="text" placeholder="Category Name" value={this.props.menuCategoryInput}/>
                        <div>
                            <button className="clearBtn" onClick={this.clearOrder}>Edit</button>
                            <button className="payBtn" onClick={this.checkout}>Save</button>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = store => (
    {
        selectedItem: store.selectedItem,
        foods: store.foods,
        drinks: store.drinks,
        menuCategoryInput: store.menuCategoryReducer.menuCategoryInput
    }
);

export default withRouter(connect(mapStateToProps)(MenuCategoryForm))