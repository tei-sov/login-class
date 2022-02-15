//Initial state for application when launched
const initialState={
    login:false,
    user:{},

}


//Reducer for user actions
export default function userReducer(state=initialState,action){
    switch (action.type) {
        case "LOGGED_IN":
            return{...state, login:true, user:action.payload}
        //Return state if no action has taken place
        default:
            return state
    }
}