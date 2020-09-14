import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleInputChange = this.handleInputChange.bind(this);

      }
    
      handleInputChange(term) {
        this.setState({ term });
        this.props.onSearch(term);
      }
    
      render() {
        return (
            <div className='search-bar'>
                <input placeholder='Search' onChange={event => this.handleInputChange(event.target.value)} />
            </div>
        );
      }
}

export default SearchBar;