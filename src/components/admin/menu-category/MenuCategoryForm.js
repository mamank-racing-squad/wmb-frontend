import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import styled from "styled-components";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {HANDLE_INPUT_CATEGORY_NAME} from "./MenuCategoryAction";
import {submitMenuCategory} from "./MenuCategoryService";

const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(1em + .75rem + 2px);
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

class MenuCategoryForm extends React.Component {
    render() {

        return (
                <div className="orderBox">
                    <div className="title">
                        <p>Menu Category Form</p>
                    </div>
                    <div className="checkoutBox">
                        <Input type="text" placeholder="Generated Id" value={this.props.menuCategoryInput.idMenuCategory} disabled="true"/>
                        <Input type="text" placeholder="Category Name"
                               value={this.props.menuCategoryInput.categoryName}
                               onChange={event => {this.props.dispatch({...HANDLE_INPUT_CATEGORY_NAME, categoryName:event.target.value})}}
                        />
                        <div>
                            <button className="clearBtn" onClick={this.clearOrder}>Edit</button>
                            <button className="payBtn"
                                    onClick={this.handleSubmitMenuCategory}>Save</button>
                        </div>
                    </div>
                </div>
        )
    }
    handleSubmitMenuCategory=()=>{
        submitMenuCategory(this.props.menuCategoryInput);
        this.props.dispatch({type:'RELOAD'})
    }
}

const mapStateToProps = store => (
    {
        selectedItem: store.selectedItem,
        foods: store.foods,
        drinks: store.drinks,
        menuCategoryInput: store.menuCategoryReducer.menuCategoryInput
    }
);

export default withRouter(connect(mapStateToProps)(MenuCategoryForm))