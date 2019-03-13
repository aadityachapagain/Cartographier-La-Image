import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addImage } from '../actions/PostActions'
import '../css/upload.css'


class Upload extends Component {

    handleChange = (event) => {
        try{
        let image = URL.createObjectURL(event.target.files[0])
        console.log('height:',image.naturalHeight,'width:',image.naturalWidth)
        this.props.dispatch({id:Math.random(),'img':image,height:image.naturalHeight,width:image.naturalWidth,signal:'LIST'})
    } catch(err){
        console.log('Error while uploading file')
    }
        
    }

    handleClick = (id) => {
        this.props.dispatch({id,signal:'CURR'})
        this.props.history.push('/locate')
    }

    render(){
        const { images } = this.props
        const ImageList = images.length ?(
            images.map ( image => {
                return(
                    <div className="col s6 m4 l3" key={image.id}>
                        <div className="card" onClick={() => {this.handleClick(image.id)}}>
                            <div className="card-image">
                            <img src={image.img} alt={image.img.name}/>
                            </div>
                        </div>
                        </div>
                )
            })
        ):(
            <p className="center"> You haven't Uploaded Any Picture yet !</p>
        )
        return(
            <div className='container'>
                <div className="container upload-btn-wrapper w3-center">
                    <button className="cstm-btn">Upload a picture</button>
                    <input className="" type="file" onChange={this.handleChange}/>
                </div>
                <div className="row">
                    {ImageList}
                </div>
            </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Upload);