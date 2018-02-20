import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'We Begin' };
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.handleSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
