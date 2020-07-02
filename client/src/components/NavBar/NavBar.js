import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    SwipeableDrawer as Drawer,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Menu from '@material-ui/core/Menu'
import { ButtonNavBar, Logo, Text } from './components'
import classes from '../../modules/nav.module.css'
import Switch from './components/Switch'

const tabs = [
    { to: 'about', title: 'About' },
    { to: 'businesses', title: 'Small Businesses' },
    { to: 'volunteers', title: 'Volunteers' },
    { to: 'contact', title: 'Contact Us' },
]

// TODO: Upate these links once notifications and logout functionlity exist
const dropTabs = [
    { to: 'account', title: 'Account' },
    { to: 'notifications', title: 'Notifications' },
    { to: 'inbox', title: 'Inbox' },
    { to: 'about', title: 'Logout' },
]

function NavBar({ userType, handleOpen }) {
    const matches = useMediaQuery('(min-width:991.98px)')
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const Links = () => (
        <div className={classes.flex}>
            {tabs.map(({ to, title }) => (
                <Link key={to} to={to} className={classes.link}>{title}</Link>
            ))}
        </div>
    )
    const DropLinks = () => (
        <div className={classes.flex}>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                {dropTabs.map(({ to, title }) => (
                    <li>
                        <Link key={to} to={to} className={classes.link}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
    const handleClick = event => {
        // This prevents ghost click.
        event.preventDefault()
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const AccountInfo = () => (
        <>
            <AccountCircleOutlinedIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <DropLinks onClick={handleClose} />
            </Menu>
            <div className={classes.account}>
                <Text>John Doe</Text>
                <Text>{`${userType} user`}</Text>
            </div>
        </>
    )
    return (
        <>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <Logo edge="start" variant="h5" className={classes.logo}>ThinkSmall</Logo>
                    {matches ? (
                        <>
                            <Links />
                            {userType && (
                                <>
                                    <AccountInfo />
                                    <ButtonNavBar userType={userType} handleOpen={handleOpen} />
                                    {userType === 'business' && (
                                        <Switch />
                                    )}
                                </>
                            )}
                        </>
                    ) : <Icon icon="bars" onClick={() => setOpen(true)} />}
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onOpen={() => { }}
                onClose={() => setOpen(false)}
                PaperProps={{
                    style: { width: 200 },
                }}
            >
                <Links />
                {userType === 'business' && (
                    <Switch />
                )}
            </Drawer>
        </>
    )
}

export default NavBar
