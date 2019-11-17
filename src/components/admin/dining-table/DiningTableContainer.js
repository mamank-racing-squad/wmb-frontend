import React, {Component} from "react"
import {connect} from "react-redux";
import DiningTableForm from "./DiningTableForm";
import Swal from 'sweetalert2'

import {editDiningTableForm, fetchDiningTableSuccess, resetDiningTableForm} from "../../../actions/DiningTableAction";
import {deleteDiningTableById,fetchDiningTable,getDataDiningTableById,submitDiningTable} from "../../../services/DiningTableService";
import {handleRespond} from "../../../constants/Alert";
import {handleAvailability} from "../../../constants/Constanta";

export class DiningTableContainer extends Component {

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
                        <th scope="col">Number Dining Table</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Availability</th>
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
                                    <td>{handleAvailability(element.isAvailable)}</td>
                                    <td>
                                        <a href="#" onClick={() => {this.handleEditData(element.idDiningTable)}} data-toggle="modal" data-target="#modalForm" data-backdrop="static" data-keyboard="false">Edit</a>
                                        |
                                        <a href="#" onClick={() => {this.handleDeleteData(element.idDiningTable)}}>Delete</a>
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
            .then((respond)=>{
                if (respond.status !== 200) handleRespond(respond.status,respond.message);
                if (respond.status === undefined) handleRespond(200, "Your data has been saved")
                    .then(this.props.dispatch({...resetDiningTableForm}));

            })
            .then(this.fetchDataDiningTable)
    };

    handleEditData = async (id) => {
        const data = await getDataDiningTableById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...editDiningTableForm, payload: data})
        }
    };

    handleDeleteData = async (id) => {
        Swal.fire({
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
                    .then((respond)=>{
                        handleRespond(respond.status, "Your data has been deleted");
                    })
                    .then(this.fetchDataDiningTable)
            }
        })
    }
}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default connect(mapStateToProps)(DiningTableContainer);