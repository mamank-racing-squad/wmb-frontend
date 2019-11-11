import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import * as action from '../../../action/action'
import {withRouter} from 'react-router-dom'
import styled, {css} from "styled-components";
import DiningTableForm from "./DiningTableForm";

const Button = styled.button`
  font-size: 16px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-bottom:10px;
  
  padding: 0.60em 1em;

  ${props =>
    props.primary &&
    css`
      background: #FF5F6D;
      color: white;
    `};
`;
class DiningTableContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div className="container">

                    <h1>Dining Table</h1>
                    <Button primary>Create</Button>
                    <table id="customers">
                        <tr>
                            <th>Name</th>
                            <th style={{textAlign: "center"}}>Capacity</th>
                            <th style={{textAlign: "center"}}>Availability</th>
                            <th style={{textAlign: "center"}}>action</th>
                        </tr>
                        <tr>
                            <td>Tabel Orang Kaya</td>
                            <td style={{textAlign: "center"}}>4</td>
                            <td style={{textAlign: "center"}}>used</td>
                            <td style={{textAlign:"center"}}> <Button>Edit</Button>|<Button>Delete</Button> </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <DiningTableForm/>
                </div>

            </div>


        )
    }
}

const mapStateToProps = store => (
    {
        selectedItem: store.selectedItem,
        foods: store.foods,
        drinks: store.drinks
    }
);

export default withRouter(connect(mapStateToProps, action)(DiningTableContainer))