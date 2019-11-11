import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import food from '../../assets/images/salad.png';
import foodGray from '../../assets/images/salad-gray.png';

import '../../assets/css/App.scss';
import Topbar from './Topbar'

import category from '../../assets/images/category.png'
import back from '../../assets/images/left-arrow.png'

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
                                <img src={food}/> :
                                <img src={foodGray}/>
                        }
                        <span>Dining</span>
                        <span style={{paddingTop: "5px"}}>Table</span>
                    </NavLink>
                    <NavLink exact to="/admin/menu" activeClassName="active" className="foods">
                        {
                            this.props.match && this.props.match.params.type === 'foods' ?
                                <img src={food}/> :
                                <img src={foodGray}/>
                        }
                        <span>Foods</span>
                    </NavLink>
                    <NavLink to="/admin/menu-category" activeClassName="active" className="drinks">
                        {
                            this.props.match && this.props.match.params.type === 'menu-category' ?
                                <img src={category}/> :
                                <img src={category}/>
                        }
                        <span>Menu Category</span>
                    </NavLink>
                    <NavLink to="/" activeClassName="active" className="menu-category">
                        {
                            this.props.match && this.props.match.params.type === 'menu-category' ?
                                <img src={back}/> :
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