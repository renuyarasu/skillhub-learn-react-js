import React, { Component } from 'react'

const h2Styles = { color: "crimson", backgroundColor: "#eee", padding: "20px" };

export default class Display extends Component {
    render() {
        return (
            <div>
                <button onClick={() => alert('Clicked!')}>ClickMe</button>
            </div >
        )
    }
}
