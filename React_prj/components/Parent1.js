
import React, {Component} from "react";
import Child1 from "./Child1";
import Compo2 from "./Compo2";

class Parent1 extends Component
{
    
    render() {
        return (
            
            <div>
              
                <h1>
                    
                    <style></style>Roshan SK [Parent]</h1>
                <Child1 bgcolorprops="Props : Roshan"></Child1>
                <h3><Compo2 props2="Functional : Roshan"></Compo2></h3>
                
            </div> 
            
        );
    }
}

export default Parent1;