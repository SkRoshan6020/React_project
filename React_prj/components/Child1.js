import React, {Component} from "react";

class Child1 extends Component
{
    render() {
        return (
            <div>
            <h1>No Child[CHILD]</h1>
            <h2>{this.props.bgcolorprops}</h2>
           </div>
        );
    }
}

export default Child1;