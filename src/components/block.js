import React, { Component } from 'react'
import placeholderImage from '../assets/images/placeholder.png'

export class Block extends Component {
    render() {
        return (
            <div className="App-block">
                <h1>THIS IS A BLOCK</h1>
                <img src={placeholderImage} alt="placeholder img"></img>
            </div>
        )
    }
}

export default Block
