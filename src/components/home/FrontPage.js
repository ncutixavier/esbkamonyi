import React from 'react';
import '../../assets/scss/home.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '2.5rem',
    padding: '.9rem 5rem',
    background: '#ffffff',
    fontSize: '1.5rem',
    color: '#1976d2',
  },
}));

const FrontPage = () => {
  const classes = useStyles();
  const news = [
    {
      id: 1,
      new:
        'Ubuyobozi bwa ESB KAMONYI buramenyesha abanyeshuri barangije umwaka wa gatandatu muri 2019 ko “Diplômes” zabo zabonetse, abazishaka baza kuzifata ku ishuri.',
    },
    {
      id: 2,
      new:
        "Amafaranga y'igihembwe cya kabiri n'icya gatatu umwaka wa 20220 - 2021.",
    },
  ];
  return (
    <>
      <div name='home' className='front-page'>
        <div className='front-page-content'>
          <div className='row-1 display-1 text-center'>Welcome!</div>
          <div className='row-1 display-4 text-center mt-5'>
            "Evangelize, Teach and Educate"
          </div>
          <div className='view-btn text-center'>
            <Link
              className='nav-link'
              to='content'
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <Button
                variant='contained'
                className={classes.button}
                endIcon={<ArrowRightAltIcon />}
              >
                view more
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <marquee behavior='scroll' direction='left'>
        {news.map((item) => (
          <span className='mr-4' key={item.id}>
            {item.new}
          </span>
        ))}
      </marquee>
    </>
  );
};

export default FrontPage;
