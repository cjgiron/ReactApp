//reducer is a function that contains logic to generate new state using actionType and payload
// no surprises just simple calculation

import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    student : {
        name: "",
        age: 0,
        address: "somewhere in US",
        session: ""
    }
}

//reducer function accepts a state and an action with action type and payload, the default state is initialstate
let StudentReducer = (previousState = INITIAL_STATE, action) => {

    switch(action.type) {

        case ActionTypes.AddStudentToStore :
            console.log("AddStudent to Store Reducer", action)


            return {...previousState, student: action.payload.student}

        default:
            return previousState;
    }
}

export default StudentReducer;