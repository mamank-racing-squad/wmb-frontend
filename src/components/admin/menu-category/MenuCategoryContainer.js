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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

class MenuCategoryContainer extends Component {

    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">
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
                                        }} data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">Edit</a>
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
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( async (result) => {
            if (result.value){
                await deleteMenuCategoryById(id)
                    .then(this.fetchDataCategoryMenu);
            }
        })
    }

}
const mapStateToProps = (state) =>{
    return {...state.menuCategoryReducer}
};

export default connect(mapStateToProps)(MenuCategoryContainer);
