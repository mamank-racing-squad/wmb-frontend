import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as action from '../../../action/action'
import { Input, Label } from '../../styled/styles';


class DiningTableForm extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="orderBox">
                <div className="title">
                    <p>Input Menu Category</p>
                </div>
                <div className="checkoutBox">
                    <form>
                        <Input type="hidden" placeholder="ID"/>
                        <Label>Number Dining Table</Label>
                        <Input type="text" placeholder="Input Dining Table" value={this.props.diningTableForm.numberDiningTable} onChange={this.handleInputNumberDiningTable}/>
                        <Label>Capacity</Label>
                        <Input type="number" min={1} placeholder="Input Capacity" value={this.props.diningTableForm.capacity} onChange={this.handleInputCapacity}/>
                        <div>
                            <button type="button" className="clearBtn" onClick={this.handleEditBtn}>Edit</button>
                            <button type="button" className="payBtn" onClick={this.handleSubmitBtn}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleInputNumberDiningTable = (event) => {
        this.props.dispatch({...handleNumberDiningTableForm, payload: event.target.value})
    };
    handleInputCapacity = (event) => {
        this.props.dispatch({...handleCapacityDiningTableForm, payload: event.target.value})
    };

    handleSubmitBtn = () => {
        this.props.dispatch({...addNewDiningTable, payload: this.props.diningTableForm});
        submitDiningTable(this.props.diningTableForm).then(this.props.dispatch({...resetDiningTableForm}));
    };

    handleEditBtn = () => {
        submitDiningTable(this.props.diningTableForm).then(this.props.dispatch({...resetDiningTableForm}));
    }
}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default withRouter(connect(mapStateToProps)(DiningTableForm));