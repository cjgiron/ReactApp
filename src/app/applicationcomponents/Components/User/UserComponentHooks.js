import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveNotification } from "../../../state/notification/notificationActions";
import { addUserToStore, signinUser } from "../../../state/user/userActions"


let UserComponent = (props)=>{

    const inputUserName = useRef(null);
    const inputPassword = useRef(null);
    const inputStreet = useRef(null);
    const inputMobile = useRef(null);

    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (mapStateToProps)
    const user = useSelector((state)=>state.userReducer.user);//this also works in async

    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    //this hook is used to do the job of mapDispatchToProps, we need to initialize it and then use it on handler
    const dispatchUserObj = useDispatch();
    const dispatchNotificationObj = useDispatch();

    const setInt= setInterval(() => {
        console.log("My name is Something")
    }, 1000);

    // replacemnet of shouldComponentUpdate or componentDidMount or componentWillUnmout
    useEffect(()=>{
        //console.log(user)        
        inputUserName.current.value = user.userName;        
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;        

        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
            clearInterval(setInt); //cleaning up interval call
        };
    })

    //submit handler to signinup user
    const handleSubmit = (evt)=>{
        // `current` points to the mounted text input element

        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value
        }

        // this hook is used to replace map dispatch to props so that we are able to 
        // make our functional component publish the new data
        dispatchUserObj(signinUser(userObj)) // now this user will be saved

        evt.preventDefault();
    }

    return(
        <>
            <h1>Login Page</h1>
            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                            placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} 
                            placeholder="Please enter mobile" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </>
    )

}

export default UserComponent;