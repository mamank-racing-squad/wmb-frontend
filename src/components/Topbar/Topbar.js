import React from 'react';
import PropTypes from 'prop-types';
import './Topbar.scss';
import searchIcon from './search.png';


class Topbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    //React 16.3 新的Hook，取代componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match) {
            switch (nextProps.match.params.type) {
                case 'foods':
                    return {
                        title: 'Foods'
                    }
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
                <div className="searchBox">
                    <img src={searchIcon} />
                    <input type="text" className="searchInput"
                        value={this.props.search}
                        placeholder={'Search for items'}
                        onChange={this.props.handleSearch}
                    />
                </div>
            </div>
        )
    }
}
Topbar.propTypes = {
    search: PropTypes.string,
    handleSearch: PropTypes.func
}
export default Topbar;