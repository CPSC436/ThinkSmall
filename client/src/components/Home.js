import React from 'react';
import { Link } from 'react-router-dom';
import src from '../assets/hug.jpg';

const Square = ({ title, subtitle, to }) => (
    <Link to={to}>
        <div style={{
            background: '#0f2c70', width: 380, height: 340, padding: '10px 10px 50px', textAlign: 'center', borderRadius: 7.5, display: 'flex', flexDirection: 'column-reverse', color: '#fbebe3'
        }}
        >
            <div>
                <img src={src} style={{
                    borderRadius: '50%',
                    width: 300,
                    height: 300,
                    objectFit: 'cover',
                }} />
                <h3>{title}</h3>
                <p style={{ fontSize: 'small' }}>{subtitle}</p>
            </div>
        </div>
    </Link>
);

const Home = () => (
    <>
        <h1 style={{ fontFamily: '\'PT Serif Caption\', serif', textAlign: 'center' }}>Are you...</h1>
        <div style={{ display: 'flex', width: 926, margin: 'auto' }}>
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

export default Home;
