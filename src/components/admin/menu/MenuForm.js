import React from 'react';
import '../../../assets/css/DiningTable.scss';
import '../../../assets/css/Order.scss'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import styled from "styled-components";
import {fetchMenuCategory} from "../menu-category/MenuCategoryService";
import {
    FETCH_MENU_CATEGORY_SUCCESS_IN_MENU,
    HANDLE_MENU_AVAILABILITY, HANDLE_MENU_CATEGORY, HANDLE_MENU_IMAGE,
    HANDLE_MENU_NAME,
    HANDLE_MENU_PRICE
} from "./MenuAction";
import {editDataMenu, submitDataMenu} from "./MenuService";

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

const Select = styled.select`
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

class MenuForm extends React.Component {
    render() {
        const menuCategory = this.props.menuCategory.map((element) => {
            return <option value={element.idMenuCategory}>{element.categoryName}</option>
        });
        return (
            <div className="orderBox">
                <div className="title">
                    <p>Menu Form</p>
                </div>
                <div className="checkoutBox">
                    <Input type="text" placeholder="Generated ID" disabled="true" onChange={event =>{this.handleInputMenuId(event)}}
                           value={this.props.menuInput.idMenu}
                    />
                    <Input type="text" placeholder="Menu Name" onChange={event =>{this.handleInputName(event)}}
                           value={this.props.menuInput.menuName}
                    />
                    <Input type="text" placeholder="Price" onChange={event =>{this.handleInputPrice(event)}}
                           value={this.props.menuInput.price}
                    />
                    <label>Upload Image</label>
                    <Input type="file" accept="image/*" onChange={event =>{this.handleInputImage(event)}}/>
                    <label>Availability</label>
                    <Select onChange={event => this.handleInputAvailability(event)}>
                        <option value="">Choose Availability</option>
                        <option value="true">Tersedia</option>
                        <option value="false">Tidak Tersedia</option>
                    </Select>
                    <label>Menu Category</label>
                    <Select onChange={this.handleInputCategory}>
                        <option value="">Choose Menu Category</option>
                        {menuCategory}
                    </Select>
                    <div>
                        <button className="clearBtn" onClick={this.handleEdit}>Edit</button>
                        <button className="payBtn" onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
    handleEdit=()=>{
        editDataMenu(this.props.menuInput)
    };

    handleInputName = (event) => {
        this.props.dispatch({...HANDLE_MENU_NAME, menuName: event.target.value})
    };
    handleInputPrice = (event) => {
        this.props.dispatch({...HANDLE_MENU_PRICE, price: event.target.value})
    };
    handleInputAvailability = (event) => {
        this.props.dispatch({...HANDLE_MENU_AVAILABILITY, availability: event.target.value})
    };
    handleInputCategory = (event) => {
        this.props.dispatch({...HANDLE_MENU_CATEGORY, category: event.target.value})
    };
    handleInputImage = (event) => {
        this.props.dispatch({...HANDLE_MENU_IMAGE, image: event.target.files[0]})
    };

    handleSubmit=()=>{
        submitDataMenu(this.props.menuInput, this.props.image)
    };

    componentDidMount() {
        this.fetchDataMenuCategory();
    }

    fetchDataMenuCategory = async () => {
        const data = await fetchMenuCategory();
        if (!(data === undefined)) {
            this.props.dispatch({...FETCH_MENU_CATEGORY_SUCCESS_IN_MENU, payload: data})
        }
    };
}

const mapStateToProps = (state) => {
    return {...state.menuReducer}
};

export default withRouter(connect(mapStateToProps)(MenuForm))