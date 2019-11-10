import React from 'react';
import './FoodItem.scss';
import PropTypes from 'prop-types';

import tick from './tick.png'
import { connect } from 'react-redux'
import * as action from '../../action'
import { withRouter } from 'react-router-dom'

class FoodItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleChange= () => {}

    render(){
        return (
            <div onClick={this.props.handleClick} className={this.props.isSelected ? 'FoodItemBox selected' : 'FoodItemBox'}>
                <img className="itemImage" src={this.props.item_image} />
                {this.props.isSelected ?
                    <label>
                        <img src={tick}/>
                    </label>    
                    : null
                }
                
                <input type="checkbox" checked={this.props.isSelected} value={this.props.isSelected} onChange={this.handleChange} />
                <span className="priceTag">{'NT '+ this.props.price}</span>
                <span className="itemNameTag">{this.props.item_name}</span>
            </div>
        )
    }
}

FoodItem.propTypes = {
    item_image: PropTypes.string,
    item_name: PropTypes.string,
    price: PropTypes.number,
    isSlected: PropTypes.bool,
    handleClick: PropTypes.func
}

const mapStateToProps = store => (
    {
      selectedItem: store.selectedItem,
      foods: store.foods,
      drinks: store.drinks
    }
  )
export default withRouter(connect(mapStateToProps, action)(FoodItem))