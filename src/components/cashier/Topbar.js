import React from 'react';
import '../../assets/css/Topbar.scss';
import searchIcon from '../../images/search.png';

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
                        title: 'Foods'
                    };
                case 'drinks':
                    return {
                        title: 'Drinks'
                    }
            }
        }
        return null
    }

    render() {
        return (
            <div className="topbar">
                <span className="title">{this.state.title}</span>
                {/*<div className="searchBox">
                    <img src={searchIcon} />
                    <input type="text" className="searchInput"
                        value={this.props.search}
                        placeholder={'Search for items'}
                        onChange={this.props.handleSearch}
                    />
                </div>*/}
            </div>
        )
    }
}

export default Topbar;