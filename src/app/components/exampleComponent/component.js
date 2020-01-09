import React, { Component } from 'react';

export default class ExampleComponent extends Component {
    render() {
        const { increaseCount } = this.props;
        return (
            <div>
                <div>count: {this.props.count}</div>
                <button onClick={increaseCount}>increase count</button>
            </div>
        )
    }
}