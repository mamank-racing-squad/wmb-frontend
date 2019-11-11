import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

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

const Label = styled.label`
    padding-bottom: 5px;
`;

class DiningTableForm extends React.Component {
    render() {
        return (
            <div className="orderBox">
                <div className="title">
                    <p>Input Menu Category</p>
                </div>
                <div className="checkoutBox">
                    <form>
                        <Input type="hidden" placeholder="ID"/>
                        <Label>Number Dining Table</Label>
                        <Input type="text" placeholder="Number Dining Table"/>
                        <Input type="number" min={1} placeholder="Capacity"/>
                        <div>
                            <button className="clearBtn">Clear</button>
                            <button className="payBtn">Save</button>
                        </div>
                    </form>
                </div>
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

export default withRouter(connect(mapStateToProps, action)(DiningTableForm))