import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import AirplayIcon from '@material-ui/icons/Airplay';
import DuoIcon from '@material-ui/icons/Duo';
import LaunchIcon from '@material-ui/icons/Launch';
import styled from 'styled-components'
import '../../assets/scss/home.scss';

const Content = () => {

    const CardWrapper = styled.div`
        text-align: center;
        height: 58vh;
        padding: 2rem;
        margin: 2rem;
        box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
        transition: all 1s;
        cursor: 'grab';

        &:hover{
            box-shadow: 0 2px 5px 1px rgb(64 60 67 / 36%);
            background-color: #fff;
            transition: all 1s;
        }
    `
    const CardIcon = styled.div`
    `
    const CardTitle = styled.div`
        font-size: 2.3rem;
        padding: 1rem 0;
    `
    const CardText = styled.div`
        font-size: 1.3rem;
        line-height: 2;
        color: grey;
    `

    const contentItem = [
        {
            id: 1,
            icon: AirplayIcon,
            title: 'Our Vision',
            text: 'Our vision is to train students to build a good future for both the country and the Church. This is possible with a guideline drawn up by the Rwandan Government, through the “Rwanda Education Board” and by the Catholic Church of Rwanda, in its SNEC-National Secretariat of Catholic Education.'
        },
        {
            id: 2,
            icon: DuoIcon,
            title: 'Our Mission',
            text: 'The mission of ESB, like all other Catholic schools, is summed up as follows: Evangelize, educate, inform and train the whole man. Grow it from the intellectual, moral and spiritual point of view. Our motto: A healthy soul in a healthy body.'
        },
        {
            id: 3,
            icon: LaunchIcon,
            title: 'Our Goal',
            text: 'The goals of ESB, like all other Catholic schools, is summed up as follows: Evangelize, educate, inform and train the whole man. Grow it from the intellectual, moral and spiritual point of view. Our motto: A healthy soul in a healthy body.'
        }
    ]

    return (
        <div className="content" name="content">
            <Container className="p-5">
                <Row lg="3" md="3" xs="1" sm="1">
                    {console.log(contentItem)}
                    {contentItem.map(item => {
                        return (
                            <Col md="4" sm="12" key={item.id}>
                                <CardWrapper>
                                    <CardIcon>
                                        <item.icon className="content-icon" />
                                    </CardIcon>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                </CardWrapper>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Content
