const initialState = {
    numOfCake : 0
}

export const OrderCake = (state=initialState, action) => {
    console.log("Reducer",action)
    switch(action.type){
        case 'ADD_CAKE':
            return {
                ...state,
                numOfCake : state.numOfCake + action.newOrder
        }
        case 'REMOVE_CAKE':
            return{
                ...state,
                numOfCake : state.numOfCake - action.newOrder
            }
        default: 
        return state
    }
}