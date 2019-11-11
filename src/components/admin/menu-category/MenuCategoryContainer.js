import React, {Component} from "react";
import styled, {css} from 'styled-components'
import MenuCategoryForm from "./MenuCategoryForm";
import {fetchMenuCategory} from "./MenuCategoryService";
import {FETCH_MENU_CATEGORY_SUCCESS} from "../AdminAction";
import {connect} from 'react-redux';

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

class MenuCategoryContainer extends Component {
    render() {
        console.log(this.props);
        const dataCategory = this.props.menuCategory.map((element, index)=>{
            return <tr>
                <td>{index+1}</td>
                <td>{element.categoryName}</td>
                <td style={{textAlign: "center"}}><Button>Edit</Button>|<Button>Delete</Button></td>
            </tr>
        });
        return (
            <div className="right-wrapper">
                <div className="items_wrapper">
                    <div className="container">
                        <table id="customers">
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            {dataCategory}
                        </table>
                    </div>
                </div>
                <MenuCategoryForm/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await fetchMenuCategory();
        console.log(data);
        if (!(data === undefined)) {
            this.props.dispatch({...FETCH_MENU_CATEGORY_SUCCESS, payload:data})
        }
    };

}
const mapStateToProps = (state) =>{
    return {...state.menuCategoryReducer}
}

export default connect(mapStateToProps)(MenuCategoryContainer);
