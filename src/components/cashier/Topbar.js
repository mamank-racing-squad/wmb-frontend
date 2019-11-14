import React from 'react';
import '../../assets/css/Topbar.scss';

class Topbar extends React.Component {
    state = {
        title: ''
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.match) {
            switch (nextProps.match.params.type) {
                case 'foods':
                    return {
                        title: 'Select Foods'
                    };
                case 'drinks':
                    return {
                        title: 'Select Drinks'
                    };
                case 'dining-table':
                    return {
                        title: 'Select Dining Table'
                    };
                default:
                    return {
                        title:'Payment'
                    };
            }
        }
        return null
    }

    render() {
        return (
            <div className="topbar">
                <span style={{fontSize:"24px"}} className="title">{this.state.title}</span>
            </div>
        )
    }
}

export default Topbar;