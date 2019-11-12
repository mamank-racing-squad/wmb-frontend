import React, {Component} from 'react';
import styled, {css} from "styled-components";
import {connect} from "react-redux";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  font-size: 15px;
  font-weight: bolder;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 0.5em;
  padding: 0.45em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class MenuTab extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Button primary>Foods</Button>
                <Button primary>Drinks</Button>
                <Button primary>Dessert</Button>
            </div>
        );
    }
}

export default connect()(MenuTab);