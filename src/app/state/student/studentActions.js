import * as ActionTypes from "../actionTypes";

export const addStudentToStore = (student) => ({
    type: ActionTypes.AddStudentToStore,
    payload: {student}
})

export const loginStudent = (student) => {

    return function(dispatch, getState) {

        console.log("called by thunk");

        window.fetch("http://localhost:9090/student/savestudent", 
        {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(response => response.json())
        .then(studentresp => {
            console.log("response ", studentresp);
            let action = addStudentToStore(studentresp);
            dispatch(action) // it will keep the current context to update the student object and takes it to the reducer
        })
        .catch((err) => {
            console.log("Error while Login", err)
        })
    }
}