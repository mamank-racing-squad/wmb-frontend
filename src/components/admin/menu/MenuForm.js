import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'

import {
    handleMenuAvailabilityForm,
    handleMenuCategoryForm,
    handleMenuImageForm,
    handleMenuNameForm,
    handleMenuPriceForm,
    resetMenuForm
} from "./MenuAction";
import {fetchMenuCategory} from "../../../services/MenuCategoryService";
import {fetchMenuCategorySuccess} from "../menu-category/MenuCategoryAction";


class MenuForm extends React.Component {

    render() {
        console.log(this.props)

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
                                    <label>Menu Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Menu Name" value={this.props.menuForm.menuName} onChange={this.handleInputName} required/>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" className="form-control" placeholder="Enter Input Price" value={this.props.menuForm.price} onChange={this.handleInputPrice} required/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" onChange={this.handleInputImage} required/>
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Menu Category</label>
                                    <select className="form-control" onChange={this.handleInputCategory} required>
                                        <option value="" selected disabled>Choose Menu Category</option>
                                        {
                                            this.props.menuCategories.map((item, key) => {
                                                return (
                                                    <option key={key} value={item.idMenuCategory}>{item.categoryName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Availability</label>
                                    <select className="form-control" onChange={this.handleInputAvailability} required>
                                        <option value="" selected disabled>Choose Availability</option>
                                        <option value="true">Tersedia</option>
                                        <option value="false">Tidak Tersedia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={ () => {this.props.dispatch(resetMenuForm)}} data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.handleSubmitData} data-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchDataCategoryMenu();
    }

    fetchDataCategoryMenu = async () => {
        const data = await fetchMenuCategory();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchMenuCategorySuccess, payload:data})
        }
    };

    handleInputName = (event) => {
        this.props.dispatch({...handleMenuNameForm, payload: event.target.value})
    };
    handleInputPrice = (event) => {
        this.props.dispatch({...handleMenuPriceForm, payload: event.target.value})
    };
    handleInputAvailability = (event) => {
        this.props.dispatch({...handleMenuAvailabilityForm, payload: event.target.value})
    };
    handleInputCategory = (event) => {
        this.props.dispatch({...handleMenuCategoryForm, payload: event.target.value})
    };
    handleInputImage = (event) => {
        this.props.dispatch({...handleMenuImageForm, payload: event.target.files[0]})
    };

}

const mapStateToProps = (state) => {
    return {
        ...state.menuReducer,
        ...state.menuCategoryReducer
    }
};

export default connect(mapStateToProps)(MenuForm);