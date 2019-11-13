import React, {Component} from "react"
import DiningTableForm from "./DiningTableForm";
import {editDiningTableForm, fetchDiningTableSuccess, resetDiningTableForm} from "./DiningTableAction";
import {
    deleteDiningTableById,
    fetchDiningTable,
    getDataDiningTableById,
    submitDiningTable
} from "../../../services/DiningTableService";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {connect} from "react-redux";

const MySwal = withReactContent(Swal);


class DiningTableContainer extends Component {

    handleAvailability(payload) {
        if (payload) {
            return "Available";
        }
        return "Not Available"
    }

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
                        <th scope="col">Nomor Dining Table</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.diningTables.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.numberDiningTable}</td>
                                    <td>{element.capacity}</td>
                                    <td>{this.handleAvailability(element.availability)}</td>
                                    <td>
                                        <a href="#" onClick={() => {
                                            this.handleEditData(element.idDiningTable)
                                        }} data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">Edit</a>
                                        |
                                        <a href="#" onClick={() => {
                                            this.handleDeleteData(element.idDiningTable)
                                        }}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <DiningTableForm fetchData={() => {this.fetchDataDiningTable()}} handleSubmitData={() => {this.handleSubmitData()}}/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchDataDiningTable();
    }

    fetchDataDiningTable = async () => {
        const data = await fetchDiningTable();
        if (!(data === undefined)) {
            this.props.dispatch({...fetchDiningTableSuccess, payload: data})
        }
    };

    handleSubmitData = () => {
        submitDiningTable(this.props.diningTableForm)
            .then(this.fetchDataDiningTable)
            .then(this.props.dispatch({...resetDiningTableForm}));
    };

    handleEditData = async (id) => {
        const data = await getDataDiningTableById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...editDiningTableForm, payload: data})
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
            if (result.value) {
                await deleteDiningTableById(id)
                    .then(this.fetchDataDiningTable);
            }
        })
    }

}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default connect(mapStateToProps)(DiningTableContainer);