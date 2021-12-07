import React, {Component} from "react";

export default class TestAppComponent extends Component {
    constructor(props, context){
        super(props);
    }

    render(){
        return( 
            <React.Fragment>
                    <h3>{"This is a test (testApp component)"}</h3>
            </React.Fragment>           
        )
    } 

}