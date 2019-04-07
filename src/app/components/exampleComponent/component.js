import React, { Component } from 'react'
import { setTimeout } from 'timers';

export default class ExampleComponent extends Component {
    componentDidMount() {
        setTimeout(
            this.props.increaseCount,
            2000
        )
    }
    render() {
        return (
            <div>
                count: {this.props.count}
            </div>
        )
    }
}