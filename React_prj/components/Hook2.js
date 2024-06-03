import React, {useState} from 'react';
import './Hook2.css';

export default class CountApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div id="abc">
                <p><b>You clicked {this.state.count} times</b></p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                </div>
        );
    }
}