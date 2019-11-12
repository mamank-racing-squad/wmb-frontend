import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../../action/action'
import { Input, Label } from '../../styled/styles';


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
                        <Input type="text" placeholder="Input Dining Table"/>
                        <Label>Capacity</Label>
                        <Input type="number" min={1} placeholder="1"/>
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