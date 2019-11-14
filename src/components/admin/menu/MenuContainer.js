import React from "react";
import MenuForm from "./MenuForm";
import {connect} from "react-redux";
import {deleteMenuById, fetchMenu, getMenuById, submitMenu} from "../../../services/MenuService";
import {editMenuForm, fetchMenuSuccess, handleNumberFormatCurrency, resetMenuForm} from "./MenuAction";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

class MenuContainer extends React.Component {

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
                        <th scope="col">Menu Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Menu Category</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.listMenu.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.menuName}</td>
                                    <td>Rp. {handleNumberFormatCurrency(element.price)}</td>
                                    <td>{element.menuCategory.categoryName}</td>
                                    <td>
                                        <a href="#" onClick={() => {
                                            this.handleEditData(element.idMenu)
                                        }} data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">Edit</a>
                                        |
                                        <a href="#" onClick={() => {
                                            this.handleDeleteData(element.idMenu)
                                        }}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <MenuForm fetchData={() => {this.fetchDataMenu()}} handleSubmitData={() => {this.handleSubmitData()}}/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchDataMenu();
    }

    fetchDataMenu = async () => {
        const data = await fetchMenu();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchMenuSuccess, payload:data})
        }
    };

    handleSubmitData = () => {
        submitMenu(this.props.menuForm, this.props.menuImage)
            .then(this.fetchDataMenu)
            .then(this.props.dispatch({...resetMenuForm}));
    };

    handleEditData = async (id) => {
        const data = await getMenuById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...editMenuForm, payload: data, imageUrl: `http://localhost/menu-image/${id}.jpg`})
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
                await deleteMenuById(id)
                    .then(this.fetchDataMenu);
            }
        })
    }
}

const mapStateToProps = (state) => {
    return {...state.menuReducer}
};

export default connect(mapStateToProps)(MenuContainer);