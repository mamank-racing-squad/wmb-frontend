import React from "react";
import MenuForm from "./MenuForm";
import {connect} from "react-redux";
import {deleteMenuById, fetchMenu, getMenuById, submitMenu} from "../../../services/MenuService";
import {editMenuForm, fetchMenuSuccess, resetMenuForm} from "./MenuAction";

class MenuContainer extends React.Component {

    render() {
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
                                    <td>{element.price}</td>
                                    <td>{element.menuCategory.categoryName}</td>
                                    <td>
                                        <a href="#" onClick={() => {
                                            this.handleEditData(element.idMenu)
                                        }} data-toggle="modal" data-target="#modalForm">Edit</a>
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
            this.props.dispatch({...editMenuForm, payload: data})
        }
    };

    handleDeleteData = async (id) => {
        await deleteMenuById(id)
            .then(this.fetchDataMenu);
    }
}

const mapStateToProps = (state) => {
    return {...state.menuReducer}
};

export default connect(mapStateToProps)(MenuContainer);