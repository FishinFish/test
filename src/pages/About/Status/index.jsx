import React, { Component } from 'react'

export default class Status extends Component {
  render() {
    console.log(this.props);
    const _uid = this.props.match.params.uid;
    return (
      <div>
        <h2>欢迎用户{`uid:${_uid}`}</h2>
      </div>
    )
  }
}
