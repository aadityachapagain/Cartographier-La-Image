import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions/PostActions';
import  '../css/controller.css'


class Controller extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            size:20,
            text_size:20,
        }
    }
    handleGroup = (id) => {
        this.props.dispatch({id,isGroupActive:true,signal:'LOCG'})
    }

    createField = (id) => {
        let rand = Math.random()
        if(this.state.name.trim()){
            if (!id){
                alert("Plz Select the Group First or Create any Group First !")
            } else{
                this.props.dispatch({signal:'ADD_FIELD',info:{id:rand,name:this.state.name,text_size:this.state.size,location:null}})
            }
        }
        this.setState({name:''})
    }

    createGroup = () => {
        if(this.state.name.trim()){
            this.props.dispatch({signal:'ADD_GROUP',info:{id:Math.random(),name:this.state.name}})
        }
        this.setState({name:''})
    }

    handleChange = (event) => {
        this.setState({name:event.target.value})
    }

    changeFieldState = (id) => {
        this.props.dispatch({id,signal:'CHANGE_FIELD_STATE'})
    }

    handleTextSize = (event) => {
        this.setState({text_size:event.target.value})
    }

    handleClickTextSize = (id => {
        this.setState({field_id:id})
    })
    render(){
        const { fields, groups, currentGroup, img} = this.props;
        var activeGroup = ''
        if (!currentGroup){
            activeGroup = "No Active Group"
        } else{
            groups.forEach(element => {
                if(element.id === currentGroup){
                    activeGroup = element.name
                }
            });
        }
        const DropDown = groups.length ? (groups.map( (group) => {
            return (
                <button className="w3-bar-item w3-button" onClick={() => {this.handleGroup(group.id)}} key={group.id}>{group.name}</button>
            )
        })):
        (
            <button className="w3-bar-item w3-button">No Groups Yet!</button>
        )

        const FieldsList = fields.length ? ( fields.map( (field) => {
            return(
                <div className="col s12 m9 l9" key={field.id}>
                    <div className="row">
                        <div className="col s12 m4 l4">{field.name}</div>
                        <div className="input-field col s12 m4 l4">
                            <input value={this.state.text_size} id="text_size" type="No" className="validate" onChange={this.handleTextSize} onClick={() => {this.handleClickTextSize(field.id)}}/>
                            <label className="active" htmlFor="text_size">text_size</label>
                        </div>
                        <div className="input-field col s12 m4 l4">
                            <button className="w3-btn w3-red" onClick={()=>{this.changeFieldState(field.id)}}>Locate</button>
                        </div>
                    </div>

                </div>
            )
        })):(
            <div className="w3-center">No Fields yet! click create button to create fields</div>
        )

        return(
            <div className="w3-container">
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="ForG" type="text" className="validate"  onChange={this.handleChange} value={this.state.name}/>
                        <label className="active" htmlFor="ForG">Enter meaningful Field or Group Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 m6 l6">
                        <button className="w3-block w3-btn w3-red" onClick={this.createGroup}>Create Group</button>
                    </div>
                    <div className="col s6 m6 l6">
                        <button className="w3-block w3-btn w3-teal" onClick={() => {this.createField(currentGroup)}}>Create Field</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 l3">
                        <div className="w3-dropdown-hover">
                            <button className="w3-button">{activeGroup}</button>
                            <div className="w3-dropdown-content w3-bar-block w3-border">
                                {DropDown}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m9 l9">
                    {FieldsList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let fields = []
    let groups = []
    if (state.currentGroup){
        fields = state.fields.filter(field => {
            return state.currentGroup === field.group_id
        })
    }

    groups = state.groups.filter( group =>{
        return state.currentImage.id === group.img_id
    })
    return {
        fields:fields,
        groups:groups,
        currentGroup:state.currentGroup,
        img:state.currentImage.id
    }
}

const mapDispatchToProps = (Dispatch) => {
    return{
        dispatch: (data) => {Dispatch(addData(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Controller)