//react - everything is component :
import React, {Component} from "react";
import MyAppComponent from "./myApp";
import TestAppComponent from "./testApp";
import DummyComponent from "./commonComponent/dummyComponent";

import "./app.css"

import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";

import Header from "./commonComponent/headerComponent";
import Footer from "./commonComponent/footerComponent";
import Home from "./commonComponent/homeComponent";
import NotFound from "./commonComponent/notFoundComponent";
import About from "./commonComponent/aboutComponent"
import MyComponent from "./commonComponent/myComponent";
import HookUsage from "./hooks/HookUsage";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }
    
    render(){
        return( // this is the jsx. this jsx implementation depends on the elements that are present in the react library
            <Router>
                <Header/>
                    <Routes>
                        <Route path="/" element={<HookUsage />} /> 
                        <Route path="/home" element={<Home headerName={"Home from App Component"} />} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/about/:id" element={<About/>}/>
                        <Route path="*" element={<NotFound/>} />
                        <Route path="/myComponent" element={<MyComponent/>} />
                        <Route path="/myComponent/:name" element={<MyComponent/>} />
                    </Routes>
                <Footer/>
            </Router>
        )
    } 

}

// browser does not understand jsx. React does understand jsx and contains all of 
// the components that will be used to convert jsx into html and javascript


// constructor(props, context){
//     super(props);
//     this.username = "Namrta";
//     this.state = {
//         time : (new Date()).toLocaleTimeString()
//     }
//     this.updateTime()
// }



// updateTime = () => {
//     setInterval(() => {
//         this.setState ({
//             time : (new Date()).toLocaleTimeString()
//         })
//     },3000)
// }

// clickHandler = () => {
//     // alert("Button clicked")

//     this.setState({
//         time: "No time to show"
//     })
// }


{/* <HeaderComponent headerTitle={"Dynamic Header Component"}>
                        <div>{"Header first child html"}</div>
                        <div>{"Header second child html"}</div>
                    </HeaderComponent>
                    <h2>{"This is my AppComponent"}</h2>
                    <button onClick={this.clickHandler}>{"This is the first button"}</button>
                    <MyAppComponent/>
                    <TestAppComponent/>
                    <b id="username">{this.username}</b>
                    <br/>
                    <div>{this.state.time}</div>
                    <input type="text" placeholder="name"></input>
                    <DummyComponent headerName={"Dynamic Dummy Component"} time = {this.state.time}>
                        <div>{"First Child HTML"}</div>
                        <div>{"Second Child HTML"}</div>
                    </DummyComponent>
                    {age >= 18 ? "I am a valid voter" : "Invalid voter"}

                    <div>
                    {age * age}
                    </div>
                    {age + age}
                    <br/>
                    {age - age}
                    <hr/> 
                    {age / age}
                    <h1>{2000 / 10}</h1> */}