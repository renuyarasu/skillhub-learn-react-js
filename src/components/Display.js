import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: "crimson", backgroundColor: "#eee", padding: "20px" }}>{this.props.name}</h2>
            </div>
        )
    }
}
