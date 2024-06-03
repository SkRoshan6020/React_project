import React, {Component} from "react";

export default class Compo3 extends Component
{
    state={
        a: "State : Roshan ShreeKumar"
    };
    x=()=>{
        this.setState(
            {
                a: "Completed!!"
            }
        );
    };
    render(){
        return(
            <div>
                <h1>{this.state.a}</h1>
                <button type="button" onClick={this.x}>Register</button>
            </div>
        )
    }
}