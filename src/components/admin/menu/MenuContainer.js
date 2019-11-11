import React, {Component} from "react";
import styled, {css} from 'styled-components'
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

class MenuContainer extends Component {
    render() {
        return (
            <div className="right-wrapper">
                <div className="items_wrapper mt-0">
                    <div className="container">
                        <table id="customers">
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Foods</td>
                                <td style={{textAlign: "center"}}><Button>Edit</Button>|<Button>Delete</Button></td>
                            </tr>
                        </table>
                    </div>
                    <MenuForm/>
                </div>
            </div>

        );
    }
}

export default MenuContainer;