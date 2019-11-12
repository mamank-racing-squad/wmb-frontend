import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";


import '../../assets/css/App.scss';
import Topbar from './Topbar'

import menuCategory from '../../assets/images/menu-category.png'
import menuCategoryGray from '../../assets/images/menu-category-gray.png'

import diningTable from '../../assets/images/table.png';
import diningTableGray from '../../assets/images/table-gray.png';

import menuGray from '../../assets/images/menu-gray.png'
import menu from '../../assets/images/menu.png'

import back from '../../assets/images/back.png'
import backGray from '../../assets/images/back-gray.png'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import * as action from '../../action/action'

import DiningTableContainer from "./dining-table/DiningTableContainer";
import MenuCategoryContainer from "./menu-category/MenuCategoryContainer";
import MenuContainer from "./menu/MenuContainer";

class AdminContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="Nav">
                    <NavLink exact to="/admin/dining-table" activeClassName="active" className="dining-table">
                        {
                            this.props.match && this.props.match.params.type === 'dining-table' ?
                                <img src={diningTable}/> :
                                <img src={diningTableGray}/>
                        }
                        <span>Dining</span>
                        <span style={{paddingTop: "5px"}}>Table</span>
                    </NavLink>
                    <NavLink exact to="/admin/menu" activeClassName="active" className="foods">
                        {
                            this.props.match && this.props.match.params.type === 'foods' ?
                                <img src={menu}/> :
                                <img src={menuGray}/>
                        }
                        <span>Menu</span>
                    </NavLink>
                    <NavLink to="/admin/menu-category" activeClassName="active" className="drinks">
                        {
                            this.props.match && this.props.match.params.type === 'menu-category' ?
                                <img src={menuCategory}/> :
                                <img src={menuCategoryGray}/>
                        }
                        <span>Menu Category</span>
                    </NavLink>
                    <NavLink to="/" activeClassName="active" className="menu-category">
                        {
                            this.props.match && this.props.match.params.type === 'menu-category' ?
                                <img src={backGray}/> :
                                <img src={back}/>

                        }
                        <span>Back</span>
                    </NavLink>
                </div>

                <div className="right-wrapper">
                    <Topbar {...this.props}/>
                    <Route path="/admin/menu" component={MenuContainer}/>
                    <Route path="/admin/dining-table" component={DiningTableContainer}/>
                    <Route path="/admin/menu-category" component={MenuCategoryContainer}/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        selectedItem: state.selectedItem,
        foods: state.foods,
        drinks: state.drinks
    }
);

export default withRouter(connect(mapStateToProps, action)(AdminContainer))