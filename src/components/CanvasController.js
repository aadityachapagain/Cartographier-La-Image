import React, { Component } from 'react';
import { connect } from 'react-redux'

import { giveLocation } from '../actions/PostActions'

class CanvasController extends Component{

  constructor(props){
    super(props)
    this.state = {dimensions:null}
  }

  onImgLoad = ({target:img}) => {
    this.setState({dimensions:{height:img.naturalHeight,
      width:img.naturalWidth}});
    }

    graph = () => {
      if (!this.state.dimensions){
        return null
      }
      return(
        <div>
          <MyCanvas image={this.refs.image} width={this.state.dimensions.width} height={this.state.dimensions.height}
           dispatch={this.props.dispatch} name={this.props.name} text_size={this.props.text_size} isFieldActive={this.props.isFieldActive}/>
        </div>
      )
    }

  render(){
    const { image } = this.props

    const style= {
      height:200,
      width:180,
      display:'none'
    }

    return(<div>
      <img src={image.img} ref="image" onLoad={this.onImgLoad} alt={image.name} style={style}/>
      {this.graph()}
    </div>)
  }
}

class MyCanvas extends Component {
    
  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.props.image

    this.setState({ctx,img})

    ctx.drawImage(img, 0, 0)
  }
  handleCanvasClick = (e)=>{
    const rect = this.refs.canvas.getBoundingClientRect();
    if(this.props.isFieldActive){
      this.state.ctx.font = this.props.text_size+"px Verdana";
      this.state.ctx.fillText(this.props.name, e.clientX - rect.left, e.clientY - rect.top)
      let X = e.clientX - rect.left
      let Y = e.clientY - rect.top
      console.log(X,Y)
      this.props.dispatch({X,Y})
    }
    else{
      alert('Field is not active, Plz click the locate button of field to record its location ...')
    }
  }
  render(){
    const height = this.props.height
    const width = this.props.width
    return(
      <canvas ref='canvas' height={height} width={width} onClick={this.handleCanvasClick}></canvas>
    )
  }
  
}

const mapStateToProps = (state) => {
  let image = null
  let name = null
  let text_size =  null

  if (state.currentImage){
    image= state.currentImage
  }

  if (state.currentField){
    name = state.fields.forEach(element => {
      if (element.id === state.currentField){
        name = element.name
        text_size = element.text_size
      }
    });
    return {
      name,
      image,
      text_size,
      isFieldActive:state.isFieldActive
    }
  }
  return {
    image
  }
}

const mapDispatchToProps = (Dispatch) => {
  return{
      dispatch: (data) => {Dispatch(giveLocation(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CanvasController)