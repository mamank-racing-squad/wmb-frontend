import React from 'react';
import '../../../assets/css/DiningTable.scss';

import {connect} from 'react-redux'
import * as action from '../../../action/action'
import {withRouter} from 'react-router-dom'
import Order from "../Order";
import DiningTableForm from "./DiningTableForm";
import styled, {css} from "styled-components";
import MenuForm from "./MenuForm";

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

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right-wrapper">
                <div className="items_wrapper">
                    <div className="container">
                        <h1>Menu</h1>
                        <table id="customers">
                            <tr>
                                <th>asda</th>
                                <th>asdasd</th>
                                <th>action</th>
                            </tr>
                            <tr>
                                <td>sadasd</td>
                                <td>sadasdas</td>
                                <td style={{textAlign: "center"}}><Button>Edit</Button>|<Button>Delete</Button></td>
                            </tr>
                        </table>
                    </div>
                    <MenuForm/>
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

export default withRouter(connect(mapStateToProps, action)(MenuContainer))