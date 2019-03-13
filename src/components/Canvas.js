import React, { Component } from 'react';
import { connect } from 'react-redux'

import Controller  from './Controller'
import CanvasController from './CanvasController'

class Canvas extends Component{

  render(){
    return (
      <div>
        <Controller />
        <div>
        <CanvasController />
        </div>
      </div>
    )
  }
}

export default Canvas;