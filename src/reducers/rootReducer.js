const initState = {
    images:[],
    currentCanvas:null,   //current canvas object
    currentImage:null,    //current image id and data
    text:{size:20},
    currentGroup:null,    //current group id
    currentField:null,    //current field id
    isFieldActive:false,
    isGroupActive:false,
    groups:[],     //contains id,img_id,name 
    fields:[],     //contains id,group_id,name,text_size,location:{x,y}
}

const rootReducer = (state = initState, action ) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPosts
        }
    }

    if (action.type === 'ADD_IMAGE'){

        return {
            ...state,
            images:[...state.images, action.image]
        }
    }

    if (action.type === 'CURR_IMAGE'){
        let image = null
        state.images.forEach(element => {
            if (element.id === action.id){
                image = element
            }
        });
        return {
            ...state,
            currentImage:image
        }
    }

    if(action.type === 'ADD_GROUP'){
        let group = {id:action.id,img_id:state.currentImage.id,name:action.name}
        return {
            ...state,
            groups:[...state.groups,group]
        }
    }

    if (action.type === 'UPDATE_GROUP'){
        return {
            ...state,
            currentGroup:action.id,
            isGroupActive:true
        }
    }

    if (action.type === 'ADD_FIELD'){
        let field = {...action.data,group_id:state.currentGroup}
        return {
            ...state,
            fields:[...state.fields,field]
        }
    }

    if (action.type === 'CHANGE_FIELD_STATE'){

        let fields = state.fields.map( field => {
            if (action.id === field.id){
                return {...field,text_size:action.text_size}
            }
            return field
        })

        return {
            ...state,
            currentField:action.id,
            isFieldActive:true,
            fields
        }
    }
    return state;
}

export default rootReducer