import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap'
import '../../assets/scss/home.scss'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import { Link } from "react-scroll"

const Navigation = () => {
  const LogoContainer = styled.div`
    display: flex;
    height: 20vh;
    padding: 0.5rem;
    width: 80%;
    margin: auto 10%;
  `;

  const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.3rem 0;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    border-bottom: 0.1rem solid rgba(229, 229, 229, 0.8);
    border-top: 0.1rem solid rgba(229, 229, 229, 0.8);
    z-index: 100;
    background: #fff;
  `;

  const MediaWrapper = styled.div`
    width: 100%;
    background: #1976d2;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  `

  return (
    <div className='navigation'>
      <MediaWrapper>
        <div className="media-icons">
          <TwitterIcon className="icon"/>
          <LinkedInIcon className="icon"/>
          <FacebookIcon className="icon" />
          <div>
            <CallIcon className="icon" />
            <b>0788376232</b>
          </div>
        </div>
      </MediaWrapper>

      <LogoContainer className='logo justify-content-center'>
        <img 
          className="logo-image"
          src='http://esbkamonyi.rw/wp-content/uploads/2018/06/header-to-use.jpg'
          alt=''
        />
      </LogoContainer>
      <NavWrapper className=''>
        <Nav className=''>
          <NavItem>
            <Link
              className='nav-link'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='staff'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Staff
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='news'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              News
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='announcement'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Announcements
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='gallery'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Gallery
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className='nav-link'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Contact
            </Link>
          </NavItem>
        </Nav>
      </NavWrapper>
    </div>
  );
};

export default Navigation;
