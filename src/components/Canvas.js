import React, { Component } from 'react';
import { connect } from 'react-redux'

class Canvas extends Component {

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
          <MyCanvas image={this.refs.image} width={this.state.dimensions.width} height={this.state.dimensions.height} />
        </div>
      )
    }
    render() {
      const style= {
        height:200,
        width:180,
        display:'none'
      }
      const image = this.props.currentImage
      return (
        <div>
          <input type="file" onChange={this.handleChange}/>
          <img src={image} ref="image" onLoad={this.onImgLoad} alt={image.name} style={style}/>
          <p>{this.state.file?this.state.file.name:''}</p>
          {this.graph()}
        </div>
      );
    }
  }
  
  class MyCanvas extends Component {
  
    componentDidMount(){
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.props.image
  
      this.setState({ctx,img})
  
      ctx.drawImage(img, 0, 0)
      ctx.font = "20px Courier"
      ctx.fillText("अंग्रेजी", 210, 75)
    }
    handleCanvasClick = (e)=>{
      const rect = this.refs.canvas.getBoundingClientRect();
      console.log("clicked !")
      console.log(e.clientX - rect.left)
      console.log(e.clientY - rect.top)
      this.state.ctx.fillText("अंग्रेजी", e.clientX - rect.left, e.clientY - rect.top + 10)
      
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
    return {
        images:state.images
    }
}

const mapDispatchToProps = (Dispatch) => {
    return{
        dispatch: (image) => {Dispatch(addImage(image))}
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Canvas);
  