const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : {
            return [
            ...state,
            action.payload
        ]}
        // eslint-disable-next-line
        break;

        case "DELITEM" :
            return state = state.filter((x)=>{
                return x.id !== action.payload
            })
            // eslint-disable-next-line
        break;

        default: return state;
        // eslint-disable-next-line
        break;    
    }
}

export default addItems;