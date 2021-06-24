import React, { Component } from 'react'

const h2Styles = { color: "crimson", backgroundColor: "#eee", padding: "20px" };

export default class Display extends Component {
    render() {
        return (
            <div>
                <h2 style={h2Styles}>{this.props.name}</h2>
            </div>
        )
    }
}
