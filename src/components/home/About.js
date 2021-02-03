import React from 'react'
import school from '../../assets/img/about.jpg'
import { Row, Col } from 'reactstrap'
const About = () => {
    return (
        <div name='about' style={{ background: '#FCFCFC', padding: '2%' }}>

            <div className="text-center title">
                <div className="display-1 font-weight-bold text-center">Who we are</div>
                <div className="h3 font-weight-light">ABOUT US</div>
            </div>
            <Row p-5>
                <Col sm12 lg={6} md6 className="about-page">
                    <div className="about-page-img">
                        <img src={school} alt="ESBKamonyi" width="100%" height="100%"/>
                    </div>
                </Col>
                <Col sm12 lg={6} md6 className="about-content">
                    <div className="about-page-content">
                        <p>Ecole Sainte Bernadette de Kamonyi is secondary school located in Kamonyi district, Rwanda. It comprises with ordinary and advanced level.</p>
                        <p>
                            <p>In advanced level, we have three options:</p>
                            <ol className="ml-5">
                                <li>MCE: Mathematics, Computer Science and Economics</li>
                                <li>HEG: History, Economics and Geography</li>
                                <li>MEG: Mathematics, Economics and Geography</li>
                            </ol>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About
