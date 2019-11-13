import React from 'react';
import '../../assets/css/Topbar.scss';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

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
                default: return {title:'Warung Makan Bahari'};
            }
        }
        return null
    }

    render() {
        return (
            <div className="topbar">
                <span className="title">{this.state.title}</span>
            </div>
        )
    }
}

export default Topbar;