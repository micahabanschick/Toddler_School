import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import bannerImage from '../assets/images/toddlers_banner.jpg'

export default class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <header>This is the Toddler School Clone</header>
                <img src={bannerImage} alt="placeholder img" width="100%"></img>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Follow us on Twitter</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
