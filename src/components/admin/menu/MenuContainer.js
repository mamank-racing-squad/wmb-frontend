import React from "react";
import { Button } from '../../styled/styles';
import MenuForm from "./MenuForm";
import {connect} from "react-redux";
import {deleteMenu, fetchDataMenu, getDataMenuById} from "./MenuService";
import {EDIT_DATA_MENU, FETCH_MENU_SUCCESS} from "./MenuAction";

class MenuContainer extends React.Component {

    deleteData = (id) => {
        deleteMenu(id);
    };

    editData = async (id) => {
        const data = await getDataMenuById(id);
        console.log(data);
        if (!(data === undefined)) {
            this.props.dispatch({...EDIT_DATA_MENU, menuInput: data})
        }
    };

    render() {
        console.log(this.props.listMenu);
        const dataMenu = this.props.listMenu.map((element, index) => {
            const avail=()=>{
                if (element.availability===true){
                    return "Tersedia"
                }else {
                    return "Tidak Tersedia"
                }
            };
            return <tr>
                {/*<td>{index+1}</td>*/}
                <td>{element.menuName}</td>
                <td><img src={`http://localhost/menu-img/${element.idMenu}.jpg`} width="200px" height="200px" alt="menu"/></td>
                <td>IDR. {element.price}</td>
                <td>{element.menuCategory.categoryName}</td>
                <td>{avail()}</td>
                <td style={{textAlign: "center"}}><Button onClick={() => {
                    this.editData(element.idMenu)
                }}>Edit</Button>|
                    <Button onClick={() => {
                        this.deleteData(element.idMenu)
                    }}>Delete</Button></td>
            </tr>
        });
        return (
            <div className="right-wrapper">
                <div className="items_wrapper mt-0">
                    <div className="container">
                        <table id="customers">
                            <tr>
                                {/*<th>No</th>*/}
                                <th>Menu Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Availability</th>
                                <th style={{textAlign: "center"}}>Action</th>
                            </tr>
                            {dataMenu}
                        </table>
                    </div>
                </div>
                <MenuForm/>
            </div>

        );
    }

    componentDidMount() {
        this.fetchDataMenu();
    }

    fetchDataMenu = async () => {
        const data = await fetchDataMenu();
        console.log(data);
        if (!(data === undefined)) {
            this.props.dispatch({...FETCH_MENU_SUCCESS, payload: data})
        }
    };
}

const mapStateToProps = (state) => {
    return {...state.menuReducer}
};

export default connect(mapStateToProps)(MenuContainer);