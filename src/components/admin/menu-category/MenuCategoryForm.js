import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import OrderList from '../OrderList'
import styled, {css} from "styled-components";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../../action/action'
import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(1em + .75rem + 2px);
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

class MenuCategoryForm extends React.Component {
    render() {
        console.log(this.props.menuCategoryInput)
        return (
                <div className="orderBox">
                    <div className="title">
                        <p>Input Menu Category</p>
                    </div>
                    <div className="checkoutBox">
                        <input type="text" placeholder="ID" disabled="true"/>
                        <input type="text" placeholder="Category Name"/>
                        <div>
                            <button className="clearBtn" onClick={this.clearOrder}>Edit</button>
                            <button className="payBtn" onClick={this.checkout}>Save</button>
                        </div>
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
        menuCategoryInput: store.menuCategoryInput
    }
);

export default withRouter(connect(mapStateToProps, action)(MenuCategoryForm))