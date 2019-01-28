const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

const addData = (id) => {
    return{
        type: 'DELETE_TODO',
        id
    }
}

const addImage = (image) => {
    if (image.signal === 'LIST'){
        return {
            type: 'ADD_IMAGE',
            image:{id:image.id,'img':image.img}
        }
    }
    if (image.signal === 'CURR'){
        return {
            type:'CURR_IMAGE',
            id:image.id
        }
    }
}

export {deletePost, addData, addImage}