import React, {Component} from "react";
import { Button } from '../../styled/styles';
import DiningTableForm from "./DiningTableForm";



class DiningTableContainer extends Component {
    render() {
        return (
            <div className="right-wrapper">
                <div className="items_wrapper mt-0">
                    <div className="container">
                        <table id="customers">
                            <tr>
                                <th>No</th>
                                <th>Number Dining Table</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Foods</td>
                                <td>4</td>
                                <td>Available</td>
                                <td style={{textAlign: "center"}}><Button>Edit</Button> <Button>Delete</Button></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <DiningTableForm/>
            </div>

        );
    }
}

export default DiningTableContainer;