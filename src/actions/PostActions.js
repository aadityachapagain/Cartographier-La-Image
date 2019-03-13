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
            id:data.id,
            text_size:data.text_size
        }
    }

    if ( data.signal === 'CHANGE_TEXT_SIZE'){
        return {
            type:'CHANGE_TEXT_SIZE',
            id:data.id,
            text_size:data.text_size
        }
    }
}

const addImage = (image) => {
    if (image.signal === 'LIST'){
        return {
            type: 'ADD_IMAGE',
            image:{id:image.id,'img':image.img,height:image.height,width:image.width}
        }
    }
    if (image.signal === 'CURR'){
        return {
            type:'CURR_IMAGE',
            id:image.id
        }
    }
}

const giveLocation = (data) => {
    return {
        type: 'UPDATE_FIELD_LOC',
        data
    }
}

export {deletePost, addData, addImage, giveLocation}