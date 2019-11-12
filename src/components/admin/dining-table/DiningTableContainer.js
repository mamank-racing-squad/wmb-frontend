import React, {Component} from "react";
import styled, {css} from 'styled-components'
import DiningTableForm from "./DiningTableForm";
import {editDiningTableForm, fetchDiningTableSuccess} from "./DiningTableAction";
import {deleteDiningTableById, fetchDiningTable, getDataDiningTableById} from "./DiningTableService";
import {connect} from "react-redux";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-bottom:10px;
  
  padding: 0.60em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

class DiningTableContainer extends Component {

    handleAvailability(payload){
        if (payload){
            return "Available";
        }
        return "Not Available"
    }

    render() {
        console.log(this.props);
        return (
            <div className="right-wrapper">
                <div className="items_wrapper mt-0">
                    <div className="container">
                        <table id="customers">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Number Dining Table</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.diningTables.map((element, index) => {
                                    return (
                                        <tr>
                                            <td>{index +1}</td>
                                            <td>{element.numberDiningTable}</td>
                                            <td>{element.capacity}</td>
                                            <td>{this.handleAvailability(element.availability)}
                                            </td>
                                            <td style={{textAlign: "center"}}>
                                                <Button onClick={() => {this.handleEditData(element.idDiningTable)}}>Edit</Button>
                                                <Button onClick={() => {this.handleDeleteData(element.idDiningTable)}}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <DiningTableForm/>
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

    handleEditData = async (id) => {
        const data = await getDataDiningTableById(id);
        if (!(data === undefined)) {
            this.props.dispatch({...editDiningTableForm, payload: data})
        }
    };

    handleDeleteData = async (id) => {
        await deleteDiningTableById(id).then(fetchDiningTable);
    }

}

const mapStateToProps = (state) => {
    return {...state.diningTableReducer}
};

export default connect(mapStateToProps)(DiningTableContainer);