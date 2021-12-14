import {connect} from "react-redux";
import { addStudentToStore, loginStudent } from "../../state/student/studentActions";
import Student from "../Components/Student/StudentComponent";


//this will make our component a subscriber 
//passing down initial state to the student component as props
let mapStateToProps = (state) => { // state is basically store exported from store.js
    return {
        student : state.studentReducer.student
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addStudent : (student) => {
            dispatch(addStudentToStore(student))
        },
        regOrLoginStudent : (student) => {
            dispatch(loginStudent(student))
        }
    }
}

//the connect method makes sure that we have access to state and actions in UserComponent
export default connect(mapStateToProps, mapDispatchToProps)(Student)