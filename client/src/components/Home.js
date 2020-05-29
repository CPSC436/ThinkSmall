import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import src from '../assets/hug.jpg';

const useStyles = makeStyles({
    header: {
        fontFamily: '\'PT Serif Caption\', serif',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        width: 926,
        margin: 'auto',
    },
    square: {
        background: '#0f2c70',
        width: 380,
        height: 340,
        padding: '10px 10px 50px',
        textAlign: 'center',
        borderRadius: 7.5,
        display: 'flex',
        flexDirection: 'column-reverse',
        color: '#fbebe3',
    },
    img: {
        borderRadius: '50%',
        width: 300,
        height: 300,
        objectFit: 'cover',
    },
});

const Square = ({ title, subtitle, to }) => {
    const classes = useStyles();
    return (
        <Link to={to}>
            <div className={classes.square}>
                <div>
                    <img src={src} className={classes.img} />
                    <h3>{title}</h3>
                    <p style={{ fontSize: 'small' }}>{subtitle}</p>
                </div>
            </div>
        </Link>
    );
};

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.header}>Are you...</h1>
            <div className={classes.container}>
                <Square
                    title="Business Owner"
                    subtitle="We need a nice logo for our website!"
                    to="/businesses"
                />
                <Square
                    title="Volunteer"
                    subtitle="Looking to get involved in the community!"
                    to="/volunteers"
                />
            </div>
        </>
    );
};

export default Home;
