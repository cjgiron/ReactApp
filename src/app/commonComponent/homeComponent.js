import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import DummyComponent from "./dummyComponent";
import {useNavigate} from "react-router-dom"

// var ObjVehicle = new Vehicle({});
// ObjVehicle.getDetails();//details

export default class Home extends PureComponent{ //has in-built implementation of shouldComponentUpdate and does comparison of each state 
    // in cases where state contains large, nested objects pure component is not ideal because it automatically compares those object attributes, creating lots of overhead
// export default class Home extends React.Component{

    constructor (props, context ) {
        super(props)
        this.state = {
            headerNameForChild : "Header Name From Home Component",
            textBoxValue : "This is a text box",
            name : "default Name",
            address: "default address",
            age: 66,
            session: "default Session",
            color: "default color"
        }

        //ref - keyword uses
        this.inputAddress = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        // this.inputAddress.current.focus(); //view can't be accessed in constructor

        this.inputAge = React.createRef();

        this.inputSession = React.createRef();
        this.inputColor = React.createRef();
    }

    //creation life cycle method // this componentDidMount runs after the render method runs, then you can access the HTML
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus(); // focus means setting up cursor
            this.inputAddress.current.value = "Component DidMount";   

        }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }

     //update lifecycle method
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextProps, nextState) { // purpose is to stop unnecessary re-rendering 
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);

    //     //return true;
    //     if (nextState.name == this.state.name) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps    
    //     }
    // }

    // componentDidUpdate(prevState, prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("prevState",prevState);
    //     console.log("prevProps", prevProps);
    // }



    changeEventHandler = (evt) =>{
        const target = evt.target;
        console.log("target", target.value)
        // this.state.textBoxValue = target.value;
        // this.forceUpdate(); //skips shouldcomponentupdate and calls render immediately // drawback of forceUpdate is that it calls render immediately

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState ({
            textBoxValue: target.value
        })

        console.log("state value" + this.state.textBoxValue);

        evt.preventDefault();
    }

    changeNameOnType = (evt)=>{
        const target = evt.target;
        //this.state.textBoxValue = target.value;        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState({
            name : target.value
        })
        console.log('state value '+ this.state.name);

        evt.preventDefault();
    }

    updateNameEvent = (evt)=>{        
        // this.state.name = "Estban";        
        // this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly
        this.setState({
            name : "Estban"
        })
        evt.preventDefault();
    }

    getDataFromChild = (header) => {

        //alert("Header value from child "+ header)
        this.setState({
            headerNameForChild: header
        })
    }

    goToAbout = () => {
        //let history = useNavigate();
        useNavigate("/about");
    }

    onSubmit = (evt) => {
        // alert("Form Submitted!")
        let age = this.inputAge.current.value;
        let address = this.inputAddress.current.value;

        let session = this.inputSession.current.value;
        let color = this.inputColor.current.value;

        this.setState ({
            age,
            address,
            session,
            color
        })

        evt.preventDefault();
    }



    render () { // render is a life cycle hook, every time we make a change, re-render is triggered
        console.log("Home Render")
        return (
            <Fragment>
                <h1>Header Name - {this.props.headerName}</h1>
                <h1>Child Header Name - {this.state.headerNameForChild}</h1>
                <input type="text" value={this.state.textBoxValue} onChange={this.changeEventHandler} />
                {/* <label>
                    Address:
                    <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                </label> */}


                {/* An input form element whose value is controlled by React in this way is called a “controlled component”. */}

                    <input type="text" placeholder="Please enter your name" 
                            value={this.state.name} 
                            onChange={this.changeNameOnType}/>

                    {/* <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={this.updateNameEvent}>Update Name</button> */}

                    {/* We are going to create an uncontrolled html form with html elements, 
                it is controlled element values are not going to be part of react state */}

                    <form onSubmit={this.onSubmit}>
                        <label>
                            Age:
                            <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
                        </label>

                        <label>
                            Address:
                            <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                        </label>

                        <label>
                            Session:
                            <input type="text" ref={this.inputSession} placeholder="Please enter session"/>
                        </label>

                        <label>
                            Color:
                            <input type="text" ref={this.inputColor} placeholder="Please enter color"/>
                        </label>

                        <input type="submit" value="Submit" />

                        <label>
                            Age: {this.state.age}<br/>
                            Address: {this.state.address}<br/>
                            Session: {this.state.session}<br/>
                            Color: {this.state.color}<br/>
                        </label>
                    </form>

                <DummyComponent headerName={this.state.headerNameForChild} getData={this.getDataFromChild}/>
            </Fragment>
        )
    }
}


Home.defaultProps = {
    headerName: "This is the default Home Header"
}

Home.propTypes = {
    headerName : PropTypes.string.isRequired
}
