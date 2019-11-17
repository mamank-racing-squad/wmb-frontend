import React from 'react';
import '../../../assets/css/DiningTable.scss';
import {connect} from 'react-redux'

import {handleCapacityDiningTableForm,handleNumberDiningTableForm, resetDiningTableForm} from "../../../actions/DiningTableAction";


export class DiningTableForm extends React.Component {

    render() {
        return (
            <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.handleModalTitle()}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {this.props.dispatch(resetDiningTableForm)}}>
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
                                <button type="button" className="btn btn-secondary" onClick={() => {this.props.dispatch(resetDiningTableForm)}} data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.handleSubmitData} data-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleModalTitle = () => {
        return this.props.diningTableForm.idDiningTable === "" ? "Add New Data" : "Edit Data";
    };

    handleInputNumberDiningTable = (event) => {
        this.props.dispatch({...handleNumberDiningTableForm, payload: event.target.value.toUpperCase()})
    };
    handleInputCapacity = (event) => {
        this.props.dispatch({...handleCapacityDiningTableForm, payload: event.target.value})
    };
}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default connect(mapStateToProps)(DiningTableForm);