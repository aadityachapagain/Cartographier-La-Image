import React, { Component } from 'react';
import { connect } from 'react-redux';

// import addData Action from actionPool to add form field to central state
import { addData } from '../actions/PostActions'

// Needed props field.id, field.name
class CanvasForm extends Component {
    constructor(props){
        super(props)
        this.state = {text:null,text_size:20}
    }

    handleTextSize = (event) => {
        // Here you can only update field when data you entered is numeric with code 
        // (event.target.validity.valid) ? event.target.value : this.state.text_size

        this.setState({text_size:(event.target.validity.valid) ? event.target.value : this.state.text_size})
    }

    changeFieldState = (id) => {
        this.props.dispatch({id,text_size:this.state.text_size,signal:'CHANGE_FIELD_STATE'})
    }

    render(){
        return(
            <div className="col s12 m9 l9">
                    <div className="row">
                        <div className="col s12 m4 l4">{this.props.name}</div>
                        <div className="input-field col s10 m4 l4">
                            <input value={this.state.text_size} id="text_size" type="text"  pattern="[0-9]*" className="validate" onChange={this.handleTextSize} />
                            <label className="active" htmlFor="text_size">text_size</label>
                        </div>
                        <div className="input-field col s12 m4 l4">
                            <button className="w3-btn w3-red" onClick={()=>{this.changeFieldState(this.props.id)}}>Locate</button>
                        </div>
                    </div>
                </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     let fields = []
//     let groups = []
//     if (state.currentGroup){
//         fields = state.fields.filter(field => {
//             return state.currentGroup === field.group_id
//         })
//     }

//     groups = state.groups.filter( group =>{
//         return state.currentImage.id === group.img_id
//     })
//     return {
//         fields:fields,
//         groups:groups,
//         currentGroup:state.currentGroup,
//         img:state.currentImage.id
//     }
// }

const mapDispatchToProps = (Dispatch) => {
    return{
        dispatch: (data) => {Dispatch(addData(data))}
    }
}


export default connect(null,mapDispatchToProps)(CanvasForm);