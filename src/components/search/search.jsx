import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchFieldValue: ''
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
  }

  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });
    this.props.searchValueEntered(event.target.value);
  }



  render () {
    return (
      <div className="mb-3">
        <label>
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
            onChange={this.searchFieldChange}
            value={this.state.searchFieldValue}
          />
        </label>      </div>
    );
  }
}

Search.propTypes = {
  searchValueEntered: PropTypes.func.isRequired
};
export default Search;
