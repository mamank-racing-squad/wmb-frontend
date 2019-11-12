import React, {Component} from "react";
import styled, {css} from 'styled-components'
import MenuForm from "./MenuForm";
import pizza from '../../../assets/images/Pizza.jpg'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-bottom:0px;
  
  padding: 0.60em 0.50em;

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
                <div className="items_wrapper mt-0">
                    <div className="container">
                        <table id="customers">
                            <tr>
                                <th>No</th>
                                <th>Menu Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Pizza</td>
                                <td><img src={pizza} width="250px" height="250px"/></td>
                                <td>IDR. 30000</td>
                                <td>Foods</td>
                                <td style={{textAlign: "center"}}><Button>Edit</Button>|<Button>Delete</Button></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <MenuForm/>
            </div>

        );
    }
}

export default MenuContainer;