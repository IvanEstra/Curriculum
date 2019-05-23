const GET_DATA_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_DATA_PENDING": return state;
        case "GET_DATA_FULFILLED": return action.payload.data.success.notas;
        case "GET_DATA_REJECTED": return state;
        default: return state;
    }
};

export {GET_DATA_REDUCER};