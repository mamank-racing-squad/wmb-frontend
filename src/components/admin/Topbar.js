import React from 'react';
import '../../assets/css/Topbar.scss';
import adminGray from '../../assets/images/admin-gray.png';

class Topbar extends React.Component {

    state = {
        title: ''
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.match) {
            switch (nextProps.match.params.type) {
                case 'foods':
                    return {
                        title: 'Foods'
                    };
                case 'drinks':
                    return {
                        title: 'Drinks'
                    };
                default :
                    return {
                        title:'Admin Panel'
                    }
            }
        }
        return null
    }

    render() {
        return (
            <div className="topbar">
                <div className="searchBox">
                    <img src={adminGray} alt="Top Bar"/>
                    <span style={{fontSize:"24px"}} className="title">{this.state.title}</span>
                </div>
            </div>
        )
    }
}

export default Topbar;