import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuTab from "./MenuTab";
import {FETCH_MENU_SUCCESS} from "../../cashier/CashierAction";
import {fetchMenu} from "./MenuService";

class MenuContainer extends Component {

    render() {
        return (
         <div>
             <MenuTab/>
             <h1>Hello guys</h1>
         </div>
        )
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await fetchMenu();
        console.log(data);
        if (!(data === undefined)) {
            this.props.dispatch({...FETCH_MENU_SUCCESS, payload:data})
        }
    };
}
const mapStateToProps = (state) =>{
    return {...state}
};

export default connect(mapStateToProps)(MenuContainer);