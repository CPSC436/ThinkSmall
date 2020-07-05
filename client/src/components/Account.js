import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import withStyles from '@material-ui/styles/withStyles'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import NavBar from './NavBar/NavBar'
import classes from '../modules/card.module.css'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

// TODO: need to connect these props with real data

const myRequests = [
    { reqTitle: 'Request Title', status: 'Todo', description: 'Logo design for new store location.' },
    { reqTitle: 'Request Title', status: 'In Progress', description: 'Flyer translation to English for new Korean grocery store.' },
    { reqTitle: 'Request Title', status: 'Done', description: 'Website design for store reboot.' },
    { reqTitle: 'Request Title', status: 'Done', description: 'Apron designs for new cafe location.' },
]

const Account = ({
    id, avatar, storeName, description, storeOwner, location, needsHelp, helpToggle, userType, myRequests,
}) => (
    <>
        <NavBar userType={userType} />
        <div
            style={{ marginLeft: '1em', marginTop: '3em' }}
            className={classes.accounts}
        >
            <Card>
                <CardMedia className={classes.media} image={avatar} />
                <CardContent>
                    <Text>
                        User Name
                        <CreateOutlinedIcon fontSize="small" />
                    </Text>
                    <Text>
                        Role
                        <CreateOutlinedIcon fontSize="small" />
                    </Text>
                    <Text>
                        Email
                        <CreateOutlinedIcon fontSize="small" />
                    </Text>
                    <Text>
                        Phone
                        <CreateOutlinedIcon fontSize="small" />
                    </Text>
                </CardContent>
            </Card>
            <div>
                <Text style={{ fontWeight: 'bold', marginBottom: '2em' }}>Account</Text>
                <Text style={{ fontWeight: 'bold', marginBottom: '1em' }}>My Requests</Text>
                <List>
                    {/* {myRequests && myRequests.map(() => ( */}
                    <ListItem key={id} alignItems="flex-start">
                        <ListItemText primary="Request Title" secondary="Logo design for new store location." />
                        <Chip label="In Progress" color="primary" variant="outlined" size="small" />
                        <ListItemIcon>
                            <DeleteOutlinedIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemIcon>
                            <ArrowDropDownRoundedIcon />
                        </ListItemIcon>
                    </ListItem>
                    {/* ))} */}
                </List>
                <Text style={{ fontWeight: 'bold', marginBottom: '1em' }}>My Businesses</Text>
            </div>
        </div>
    </>
)

export default Account
