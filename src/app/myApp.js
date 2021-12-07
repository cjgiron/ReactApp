import React, {Component} from "react";

export default class MyAppComponent extends Component {
    constructor(props, context){
        super(props);
    }

    render(){
        return( 
            <React.Fragment>
                    <h3>{"Ciara Giron (myAppComponent)"}</h3>
            </React.Fragment>           
        )
    } 

}