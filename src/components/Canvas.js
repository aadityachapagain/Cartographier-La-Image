import React, { Component } from 'react';
import { connect } from 'react-redux'
import Controller  from './Controller'

class Canvas extends Component{

  render(){
    return (
      <div>
        <Controller />
      </div>
    )
  }
}

export default Canvas;