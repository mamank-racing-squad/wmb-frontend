import React from 'react';
import {connect} from 'react-redux'
import {handleMenuAvailabilityForm,handleMenuCategoryForm,handleMenuImageForm,handleMenuNameForm,handleMenuPriceForm,resetMenuForm} from "../../../actions/MenuAction";
import {fetchMenuCategory} from "../../../services/MenuCategoryService";
import {fetchMenuCategorySuccess} from "../../../actions/MenuCategoryAction";

class MenuForm extends React.Component {

    render() {
        return (
            <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.handleModalTitle()}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {this.props.dispatch(resetMenuForm)}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Menu Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Menu Name" value={this.props.menuForm.menuName} onChange={this.handleInputName}/>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" className="form-control" placeholder="Enter Input Price" value={this.props.menuForm.price} onChange={this.handleInputPrice}/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <br/>
                                    <img className="rounded d-block" src={this.handlePreviewImage()} alt="" style={{maxWidth: "200px", maxHeight:"200px"}}/>
                                    <br/>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" onChange={this.handleInputImage}/>
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Menu Category</label>
                                    <select className="form-control" defaultValue={this.props.menuForm.idMenuCategory} onChange={this.handleInputCategory}>
                                        <option value="" disabled>Choose Menu Category</option>
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
                                    <select className="form-control" defaultValue={this.props.menuForm.isAvailable} onChange={this.handleInputAvailability}>
                                        <option value="" disabled>Choose Availability</option>
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

    handleModalTitle = () => {
        return this.props.menuForm.idMenu === "" ? "Add New Data" : "Edit Data";
    };

    handlePreviewImage = () => {
        if (this.props.previewImage !== "") return this.props.previewImage;
    };

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
        let file = event.target.files[0];
        let imageUrl = URL.createObjectURL(file);
        this.props.dispatch({...handleMenuImageForm, payload: file, imageUrl: imageUrl})
    };

}

const mapStateToProps = (state) => {
    return {
        ...state.previewImage,
        ...state.menuReducer,
        ...state.menuCategoryReducer
    }
};

export default connect(mapStateToProps)(MenuForm);