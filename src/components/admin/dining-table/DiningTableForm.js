import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
    handleCapacityDiningTableForm,
    handleNumberDiningTableForm
} from "./DiningTableAction";


class DiningTableForm extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Number Dining Table</label>
                                    <input type="text" className="form-control" placeholder="Enter Number Dining Table" value={this.props.diningTableForm.numberDiningTable} onChange={this.handleInputNumberDiningTable} required/>
                                </div>
                                <div className="form-group">
                                    <label>Capacity</label>
                                    <input type="number" min="1" className="form-control" placeholder="Enter Number Dining Table" value={this.props.diningTableForm.capacity} onChange={this.handleInputCapacity} required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.handleSubmitData} data-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>
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
}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default withRouter(connect(mapStateToProps)(DiningTableForm));