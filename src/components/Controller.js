import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addData } from '../actions/PostActions'


class Controller extends Component {

    render(){
        const { collection } = this.props;
        return(
            <div className="w3-container">
                <div class="w3-bar">
                    <button class="w3-bar-item w3-btn w3-red" style="width:33.3%">Create Group</button>
                    <button class="w3-bar-item w3-btn w3-teal" style="width:33.3%">Create Field</button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let collection = null
    state.struct.forEach(element => {
        if (element.id === state.currentImage.id){
            collection = element.data
        }
    });
    return {
        collection
    }
}

const mapDispatchToProps = (Dispatch) => {
    return{
        dispatch: (image) => {Dispatch(addData(image))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Controller)