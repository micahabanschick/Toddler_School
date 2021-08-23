import React, { Component } from 'react'
import Block from './block'

export default class Blocks extends Component {

    state = {"1": 1,"2": 2,"3": 3}

    render() {
        // let i = 0
        // while (i < 4) {
        //     i++
        //     return (
        //         <div>
        //             <Block/>
        //         </div>
        //     )
        // }

        return (
        
            <div>
                
                {[1,2,3,4,5].map((value, index) => (
                    <Block id={index + 1} key={index} />
                ))}
            </div>
        )
    }
}

