const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

const addData = (data) => {
    if (data.signal === 'LOCG'){
        return {
            type: 'UPDATE_GROUP',
            id:data.id,
            isGroupActive:data.isGroupActive
        }
    }
    if (data.signal === 'ADD_FIELD'){
        return {
            type:'ADD_FIELD',
            data:data.info
        }
    }
    if (data.signal === 'ADD_GROUP'){
        return {
            type:'ADD_GROUP',
            ...data.info
        }
    }

    if ( data.signal === 'CHANGE_FIELD_STATE'){
        return {
            type:'CHANGE_FIELD_STATE',
            id:data.id
        }
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