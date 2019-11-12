import React, {Component} from 'react';
import tick from "../../../assets/images/tick.png";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../../../action/action";
import MenuItem from "../MenuItem";
import TabberMenu from "./TabberMenu";
import {FETCH_MENU_SUCCESS} from "../../cashier/CashierAction";
import {fetchMenu} from "./MenuService";

class MenuContainer extends Component {

    render() {
        return (
         <div>
             <TabberMenu/>
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
}

export default connect(mapStateToProps)(MenuContainer);