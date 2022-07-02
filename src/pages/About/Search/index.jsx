import React, { Component } from 'react';

class Search extends Component {
  render() {
    const search = this.props.location.search;
    return (
      <div>
        搜索内容：{search}
      </div>
    );
  }
}

export default Search;