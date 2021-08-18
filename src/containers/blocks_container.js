import React, { Component } from 'react'
import { connect } from 'react-redux'
import Blocks from '../components/blocks'

export class BlocksContainer extends Component {
    render() {
        return (
            <div>
                <Blocks/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlocksContainer)
