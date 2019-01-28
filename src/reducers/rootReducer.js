const initState = {
    images:[],
    currentCanvas:null,
    struct:[],
    currentImage:null,
    text:{size:20}
    

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

    if (action.type === 'DELETE_TODO'){
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        })
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export default rootReducer