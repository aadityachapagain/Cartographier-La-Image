import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      file: null,
      dimensions: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
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
        <canvas ref="canvas" width={this.state.dimensions.width} height={this.state.dimensions.height} />
      </div>
    )
  }
  render() {
    const style= {
      height:200,
      width:180,
      display:'none'
    }
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file} ref="image" onLoad={this.onImgLoad} style={style}/>
        <p>{this.state.file?this.state.file.name:''}</p>
        {this.graph()}
      </div>
    );
  }
}

export default App;
