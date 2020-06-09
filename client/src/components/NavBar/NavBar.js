import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { StylesProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ButtonNavBar, Logo, Text } from './components';
import classes from '../../modules/nav.module.css';

const tabs = [
    { to: 'about', title: 'About' },
    { to: 'businesses', title: 'Small Businesses' },
    { to: 'volunteers', title: 'Volunteers' },
    { to: 'contact', title: 'Contact Us' },
];

function NavBar({ userType, handleOpen }) {
    const Links = () => (
        <div className={classes.flex}>
            {tabs.map(({ to, title }) => (
                <Link key={to} to={to} className={classes.link}>{title}</Link>
            ))}
        </div>
    );
    const AccountInfo = () => (
        <>
            <AccountCircleOutlinedIcon />
            <div className={classes.account}>
                <Text>John Doe</Text>
                <Text>{`${userType} user`}</Text>
            </div>
        </>
    );
    return (
        <StylesProvider injectFirst>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Logo edge="start" variant="h5">ThinkSmall</Logo>
                    <Links />
                    <AccountInfo />
                    <ButtonNavBar userType={userType} handleOpen={handleOpen} />
                </Toolbar>
            </AppBar>
        </StylesProvider>
    );
}

export default NavBar;
