import React, { Component } from 'react'
import Navbar from './home/Navbar'
import FrontPage from './home/FrontPage'
import Content from './home/Content'
import About from './home/About'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FrontPage />
                <Content />
                {/* <FrontPage />
                <About /> */}
            </div>
        )
    }
}

export default LandingPage
