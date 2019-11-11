import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import food from '../../assets/images/salad.png';
import foodGray from '../../assets/images/salad-gray.png';
import drink from '../../assets/images/cheers.png';
import drinkGray from '../../assets/images/cheers-gray.png';
import '../../assets/css/App.scss';
import Topbar from './Topbar'

import FoodItem from './MenuItem'
import spaghetti from '../../assets/images/spaghetti.jpg';
import pizza from '../../assets/images/Pizza.jpg'
import frenchFries from '../../assets/images/french-fries.jpg'
import cola from '../../assets/images/cola.jpg'
import coffee from '../../assets/images/coffee.JPG'
import milkTea from '../../assets/images/milk-tea.jpg'
import blackTea from '../../assets/images/black-tea.jpg'
import category from '../../assets/images/category.png'
import back from '../../assets/images/left-arrow.png'
import Order from './Order'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import * as action from '../../action/action'
import MenuCategory from './MenuCategory';
import DiningTableContainer from "./dining-table/DiningTableContainer";

class AdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        console.log(this.props)
        this.props.addFoods(
            [
                {name: "Spaghetti", image: spaghetti, price: 130000, isSelected: false, isAvailable: false},
                {name: "Pizza", image: pizza, price: 250000, isSelected: false, isAvailable: false},
                {name: "French-Frices", image: frenchFries, price: 8000, isSelected: false, isAvailable: true}
            ]
        );
        this.props.addDrinks(
            [
                {name: "Cola", image: cola, price: 4000, isSelected: false, isAvailable: true},
                {name: "Coffee", image: coffee, price: 10000, isSelected: false, isAvailable: true},
                {name: "Milk Tea", image: milkTea, price: 90, isSelected: false, isAvailable: false},
                {name: "Black Tea", image: blackTea, price: 30, isSelected: false, isAvailable: true}
            ]
        );
    }

    handleFoodItemSelect = (type, key) => {
        const {foods, drinks} = this.props;
        const id = key;
        if (type === 'foods') {
            let food = foods;
            food[id].isSelected = !foods[id].isSelected;
            this.props.updateFood(food);
            if (foods[id].isSelected) {
                this.props.onItemSelected(
                    {
                        name: foods[id].name,
                        price: foods[id].price,
                        quantity: 1,
                        type: 'food'
                    })
            } else {
                this.props.onItemUnselected({
                    name: foods[id].name
                })
            }

        } else {
            let drink = drinks;
            drink[id].isSelected = !drinks[id].isSelected;
            this.props.updateDrink(drink);

            if (drinks[id].isSelected) {
                this.props.onItemSelected(
                    {
                        name: drinks[id].name,
                        price: drinks[id].price,
                        quantity: 1,
                        type: 'drink'
                    })
            } else {
                this.props.onItemUnselected({
                    name: drinks[id].name
                })
            }

        }
    };

    handleSearch = (e) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({search: e.target.value})
        }
    };

    check = (str) => {
        if (str.includes('ne'))
            return str;
    };

    render() {
        const {foods, drinks} = this.props;
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
                    <NavLink to="/admin/drinks" activeClassName="active" className="drinks">
                        {
                            this.props.match && this.props.match.params.type === 'drinks' ?
                                <img src={drink}/> :
                                <img src={drinkGray}/>
                        }
                        <span>Drinks</span>
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
                    <Topbar {...this.props} search={this.state.search} handleSearch={this.handleSearch}/>
                    <div className="items_wrapper">
                        <Route path="/admin/menu"
                               render={() => foods.map((item, key) => {
                                if (item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                                    return (
                                        <FoodItem item_name={item.name} item_image={item.image} price={item.price}
                                                  isSelected={item.isSelected}
                                                  handleClick={() => this.handleFoodItemSelect('foods', key)} key={key}
                                        />
                                    )
                                }
                            }
                        )}

                        />
                        <Route path="/admin/dining-table"
                               component={DiningTableContainer}
                        />
                        <Route path="/admin/drinks" render={() => drinks.map((item, key) => {
                                if (item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                                    return (
                                        <FoodItem item_name={item.name} item_image={item.image} price={item.price}
                                                  isSelected={item.isSelected}
                                                  handleClick={() => this.handleFoodItemSelect('drinks', key)} key={key}
                                        />
                                    )
                                }
                            }
                        )}/>
                        <Route path="/admin/menu-category" component={MenuCategory}/>
                    </div>
                    {/*<Order/>*/}
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