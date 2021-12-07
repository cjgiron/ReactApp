console.log("Entry File of Front End - React Application")
//alert("The first code after setup")
import React from "react";
import { render } from "react-dom"; //it is responsible for comparison of virtual dom to actual dom, allows us to render application (app) into root element

// import { AppComponent } from "./app/app"; //named import
import AppComponent from "./app/app"; //default import


render( //requires two parameters 1.the app component to be rendered, 2. root element over which this needs to be rendered
    <AppComponent/>,
    document.getElementById("root"),//bootstrapping of application component to root element(container) // setting up the 
    // starting point of the application at one element
)

//create reactapp folder
//npm init
//create webpackconfig.js - copy paste
//package.json - copy paste
//npm i
//npm start