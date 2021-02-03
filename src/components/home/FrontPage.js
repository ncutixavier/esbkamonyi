import React from 'react'
import '../../assets/scss/home.scss'

const FrontPage = () => {
    const news = [
        {
            id: 1,
            new: "Ubuyobozi bwa ESB KAMONYI buramenyesha abanyeshuri barangije umwaka wa gatandatu muri 2019 ko “Diplômes” zabo zabonetse, abazishaka baza kuzifata ku ishuri."
        },
        {
            id: 2,
            new: "Amafaranga y'igihembwe cya kabiri n'icya gatatu umwaka wa 20220 - 2021."
        }
    ]
    return (
        <>
            <div name='home' className="front-page">
                <div className="front-page-content">
                    <div className="row-1 display-4 font-weight-bold">Welcome to</div>
                    <div className="row-1 display-1 font-weight-bold mb-5">Ecole Saint Bernadette Kamonyi</div>
                    <div className="row-1 h3 font-weight-bold mt-5">"Evangelize, Teach and Educate"</div>
                </div>
            </div>

            <marquee behavior="scroll" direction="left">
                {news.map(item => <span className="mr-4">{item.new}</span>)}
            </marquee>
        </>
    )
}

export default FrontPage
