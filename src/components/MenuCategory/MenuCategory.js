import React, { Component } from "react";
import './MenuCategory.scss'
import styled, { css } from 'styled-components'

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
`

export default class MenuCategory extends Component {
  render() {
    return (
     <div className="container">
        <Button>Create</Button>      
        <table id="customers">
          <tr>
          <th>No</th>
            <th>Category Name</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
          <tr>
              <td>1</td>
            <td>Maria Anders</td>
            <td style={{textAlign:"center"}}> <Button>Edit</Button>|<Button>Delete</Button> </td>
          </tr>
        </table>
      </div>
    );
  }
}
