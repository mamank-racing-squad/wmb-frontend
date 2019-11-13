import React, { Component } from "react";
import '../../assets/css/Table.scss'
import '../../assets/css/Order.scss';
import styled, { css } from 'styled-components'

const Button = styled.button`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bolder;  
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
`

export default class MenuCategory extends Component {
  render() {
    return (
     <div className="container">
        <Button primary>Create</Button>
        <table id="customers">
          <tr >
          <th>No</th>
            <th>Category Name</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
          <tr>
              <td>1</td>
            <td>Maria Anders</td>
            <td style={{textAlign:"center"}}> <Button>Edit</Button>|<Button>Delete</Button> </td>
          </tr>
            <tr>
                <td>2</td>
                <td>Maria Aldi</td>
                <td style={{textAlign:"center"}}> <Button>Edit</Button>|<Button>Delete</Button> </td>
            </tr>
        </table>
      </div>
    );
  }
}
