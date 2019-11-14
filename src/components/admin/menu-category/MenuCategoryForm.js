import React from 'react';
import {connect} from 'react-redux'
import {handleCategoryNameForm, resetMenuCategoryForm} from "../../../actions/MenuCategoryAction";

class MenuCategoryForm extends React.Component {

    render() {
        return (
            <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.handleModalTitle()}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Category Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Category Name" value={this.props.menuCategoryForm.categoryName} onChange={this.handleInputCategoryName}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => {this.props.dispatch(resetMenuCategoryForm)}} data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.props.handleSubmitData} data-dismiss="modal">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleModalTitle = () => {
        return this.props.menuCategoryForm.idMenuCategory === "" ? "Add New Data" : "Edit Data";
    };

    handleInputCategoryName = (event) => {
        this.props.dispatch({...handleCategoryNameForm, payload: event.target.value})
    };
}

const mapStateToProps = (state) => {
    return {...state.menuCategoryReducer}
};

export default connect(mapStateToProps)(MenuCategoryForm);