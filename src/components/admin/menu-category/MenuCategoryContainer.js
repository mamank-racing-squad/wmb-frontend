import React, {Component} from "react";
import MenuCategoryForm from "./MenuCategoryForm";
import {
    deleteMenuCategoryById,
    fetchMenuCategory,
    getMenuCategoryById,
    submitMenuCategory
} from "../../../services/MenuCategoryService";
import {editMenuCategoryForm, fetchMenuCategorySuccess} from "./MenuCategoryAction";
import {connect} from 'react-redux';
import {resetDiningTableForm} from "../dining-table/DiningTableAction";

class MenuCategoryContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalForm">
                    Add New
                </button>
                <br/><br/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.menuCategories.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.categoryName}</td>
                                    <td>
                                        <a href="#" onClick={() => {
                                            this.handleEditData(element.idMenuCategory)
                                        }} data-toggle="modal" data-target="#modalForm">Edit</a>
                                        |
                                        <a href="#" onClick={() => {
                                            this.handleDeleteData(element.idMenuCategory)
                                        }}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <MenuCategoryForm fetchData={() => {this.fetchDataCategoryMenu()}} handleSubmitData={() => {this.handleSubmitData()}}/>
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

    handleSubmitData = () => {
        submitMenuCategory(this.props.menuCategoryForm)
            .then(this.fetchDataCategoryMenu)
            .then(this.props.dispatch({...resetDiningTableForm}));
    };

    handleEditData = async (id) => {
        const data = await getMenuCategoryById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...editMenuCategoryForm, payload: data})
        }
    };

    handleDeleteData = async (id) => {
        await deleteMenuCategoryById(id)
            .then(this.fetchDataCategoryMenu);
    }

}
const mapStateToProps = (state) =>{
    return {...state.menuCategoryReducer}
};

export default connect(mapStateToProps)(MenuCategoryContainer);
