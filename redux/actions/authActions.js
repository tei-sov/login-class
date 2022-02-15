import firebase from "../../firebase/firebase"

export const createEmailAccount=(details)=>{
    return async(dispatch)=>{
        try {
            //Access auth object of firebase which has the function to create a user
            const user =await firebase.auth().createUserWithEmailAndPassword(details.email, details.confirm)
            userSignUpDetails(details.name)
            // dispatch(loggedIn(user))
        } catch (error) {
            console.log(error)
            dispatch(registerError(error.message))
        }
    }
}


export const loginEmailAccount=(email,password)=>{
    return async(dispatch)=>{
        try {
            //Access auth object of firebase which has the function to create a user
            const user =await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(loggedIn(user))
        } catch (error) {
            console.log(error)
            // dispatch(loginError(error.message))
        }
    }
}

export const logout=()=>{
    return async(dispatch)=>{
        try {
            await firebase.auth().signOut().then(
                ()=>{ dispatch(loggedOut())}
            )
        } catch (error) {
            console.log(error)    
        }
    }
}


function loggedIn(user){
    return{
        type:"LOGGED_IN",
        payload:user,
    }
}

function loggedOut(){
    return{
        type:"LOGGED_OUT",
    }
}

function registerError(error){
    return{
        type:"REGISTER_ERROR",
        payload:error,
    }
}

function loginError(error){
    return{
        type:"LOGIN_ERROR",
        payload:error,
    }
}






    









