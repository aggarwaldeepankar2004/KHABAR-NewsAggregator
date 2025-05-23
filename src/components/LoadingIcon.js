import React, { Component } from 'react'
import loading from './spinner-2.gif'

export default class LoadingIcon extends Component {
  render() {
    return (
      <div className="text-center">
        <img style={{marginTop:"215px"}} src={loading} alt="loading"></img>
      </div>
    )
  }
}
