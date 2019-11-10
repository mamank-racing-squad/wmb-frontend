import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

import food from './salad.png';
import foodGray from './salad-gray.png';
import drink from './cheers.png';
import drinkGray from './cheers-gray.png';
import './App.scss';
import Topbar from '../Topbar/Topbar'

import FoodItem from '../FoodItem/FoodItem'
import spaghetti from './spaghetti.jpg';
import pizza from './Pizza.jpg'
import frenchFries from './french-fries.jpg'
import cola from './cola.jpg'
import coffee from './coffee.JPG'
import milkTea from './milk-tea.jpg'
import blackTea from './black-tea.jpg'
import Order from '../Order/Order'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as action from '../../action'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.props.addFoods(
      [
        { name: "Spaghetti", image: spaghetti, price: 130, isSelected: false },
        { name: "Pizza", image: pizza, price: 250, isSelected: false },
        { name: "French-Frices", image: frenchFries, price: 80, isSelected: false }
      ]
    )
    this.props.addDrinks(
      [
        { name: "Cola", image: cola, price: 40, isSelected: false },
        { name: "Coffee", image: coffee, price: 100, isSelected: false },
        { name: "Milk Tea", image: milkTea, price: 90, isSelected: false },
        { name: "Black Tea", image: blackTea, price: 30, isSelected: false }
      ]
    )
    this.handleFoodItemSelect = this.handleFoodItemSelect.bind(this)
  }

  handleFoodItemSelect = (type, key) => {
    const { foods, drinks } = this.props;
    const id = key;
    if (type === 'foods') {
      let food = foods;
      food[id].isSelected = !foods[id].isSelected;
      this.props.updateFood(food)
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
      this.props.updateDrink(drink)

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
  }
  handleSearch = (e) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ search: e.target.value })
    }
  }
  check = (str) => {
    if (str.includes('ne'))
      return str;
  }
  render() {
    const { foods, drinks } = this.props;
    return (
      <div>
        <div className="Nav">
          <NavLink exact to="/foods" activeClassName="active" className="foods">
            {
              this.props.match && this.props.match.params.type == 'foods' ?
                <img src={food} /> :
                <img src={foodGray} />
            }
            <span>Foods</span>
          </NavLink>
          <NavLink to="/drinks" activeClassName="active" className="drinks">
            {
              this.props.match && this.props.match.params.type == 'drinks' ?
                <img src={drink} /> :
                <img src={drinkGray} />
            }
            <span>Drinks</span>
          </NavLink>
        </div>
        <div className="right-wrapper">
          <Topbar {...this.props} search={this.state.search} handleSearch={this.handleSearch} />
          <div className="items_wrapper">
            <Route path="/foods" render={() => foods.map((item, key) => {
              if (item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                return (
                  <FoodItem item_name={item.name} item_image={item.image} price={item.price} isSelected={item.isSelected} handleClick={() => this.handleFoodItemSelect('foods', key)} key={key} />
                )
              }
            }
            )} />
            <Route path="/drinks" render={() => drinks.map((item, key) => {
              if (item.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                return (
                  <FoodItem item_name={item.name} item_image={item.image} price={item.price} isSelected={item.isSelected} handleClick={() => this.handleFoodItemSelect('drinks', key)} key={key} />
                )
              }
            }

            )} />
          </div>
          <Order />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => (
  {
    selectedItem: store.selectedItem,
    foods: store.foods,
    drinks: store.drinks
  }
)

export default withRouter(connect(mapStateToProps, action)(App))