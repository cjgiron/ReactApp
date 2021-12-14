import React, { Component, Fragment } from "react";

export default class Student extends Component {

    constructor(props, context) {
        super(props);

        this.state = {
            name : props.student.name,
            age : props.student.age,
            address : props.student.address,
            session : props.student.session
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let value = target.value;

        let classList = target.classList;

        // console.log("classlist ", classList)

        if(classList.contains("name")){
            this.setState({
                name : value
            })
        }else if(classList.contains("age")){
            this.setState({
                age : value
            })
        }else if(classList.contains("address")){
            this.setState({
                address : value
            })
        }else if (classList.contains("session")) {
            this.setState({
                session: value
            })    
        }       

        evt.preventDefault()
    }

    loginStudent = ()=>{
        // alert("we are going to sign in below user - " +JSON.stringify(this.state))
        // this.props.addUser(this.state);
        this.props.regOrLoginStudent(this.state);
    }



    render(){
        return(
            <Fragment>
                <h1>Student Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Name</b>
                            <input type="text" className="form-control col-md-6 name" value={this.state.name} 
                                placeholder="Name" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                            <b>Age</b>
                            <input type="text" className="form-control col-md-6 age" value={this.state.age} 
                                placeholder="Age" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                        <b>Address </b>
                        <input type="text" className="form-control col-md-6 address" value={this.state.address} 
                            placeholder="Address"
                            onChange={this.onTextChange} />
                        </div>

                        <div className="col-md-12">
                            <b>Session </b>
                            <input type="text" className="form-control col-md-6 session" value={this.state.session} 
                                placeholder="Session" maxLength="11"
                                onChange={this.onTextChange} />
                        </div>

                    {/* {this.props.user._id} */}

                        <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                value={"Login"} 
                                onClick={this.loginStudent}/>
                    </div>
                </section>

            </Fragment>
        )
    }
}