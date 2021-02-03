import React, { Component } from 'react'
import Navbar from './home/Navbar'
import FrontPage from './home/FrontPage'
import About from './home/About'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FrontPage />
                <About />
            </div>
        )
    }
}

export default LandingPage
