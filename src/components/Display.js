import React, { Component, useState } from 'react'

const h2Styles = { color: "crimson", backgroundColor: "#eee", padding: "20px" };
const [name, setName] = useState('React App');
export default class Display extends Component {

    render() {
        return (
            <div>
                <h2>{name}</h2>
                <button onClick={() => alert('Clicked!')}>ClickMe</button>
            </div >
        )
    }
}
