import React, { Component } from 'react'
import placeholderImage from '../assets/images/placeholder.png'
// import bannerImage from '../assets/images/toddlers_banner.jpg'
import tigerImage from '../assets/images/TIGER.jpg'
import theSunImage from '../assets/images/theSun.jpg'
import snailImage from '../assets/images/snail.jpg'
import pandaImage from '../assets/images/panda.jpg'
import mySisterImage from '../assets/images/mySister.jpg'
import michelleImage from '../assets/images/michelle.jpg'
import inthebeginingImage from '../assets/images/inthebegining.jpg'
import girlImage from '../assets/images/girl.jpg'
import foxBoxImage from '../assets/images/fox_on_box.jpg'
import cover1Image from '../assets/images/cover1.jpg'
import catandFiddleImage from '../assets/images/catandFiddle.jpg'
import babyMosesImage from '../assets/images/baby_moses.jpg'
import sittingImage from '../assets/images/sitting.jpg'
import tickImage from '../assets/images/TICK.jpg'
import teethImage from '../assets/images/TEETH.jpg'


export class Block extends Component {
    currentImage() {
        if(this.props.id === 1) {
            return snailImage
        } else if (this.props.id === 2) {
            return inthebeginingImage
        } else if (this.props.id === 3) {
            return cover1Image
        } else if (this.props.id === 4) {
            return babyMosesImage
        } else if (this.props.id === 5) {
            return pandaImage
        } else if (this.props.id === 6) {
            return mySisterImage
        } else if (this.props.id === 7) {
            return michelleImage
        } else if (this.props.id === 8) {
            return tickImage
        } else if (this.props.id === 9) {
            return sittingImage
        } else if (this.props.id === 10) {
            return teethImage
        } else if (this.props.id === 11) {
            return girlImage
        } else if (this.props.id === 12) {
            return theSunImage
        } else if (this.props.id === 13) {
            return catandFiddleImage
        } else if (this.props.id === 14) {
            return foxBoxImage
        } else if (this.props.id === 15) {
            return tigerImage
        } else {
            return placeholderImage
        }
        // return placeholderImage
    }
    render() {
        return (
            <div className="App-block">
                <h4>THIS IS A BLOCK</h4>
                <img src={this.currentImage()} alt="placeholder img" width="80%"></img>
            </div>
        )
    }
}

export default Block
