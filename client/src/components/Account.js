import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ReadMoreReact from 'read-more-react'
import classes from '../modules/card.module.css'
import NavBar from './NavBar/NavBar'
import placeholder from '../assets/white-room.jpeg'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            float: 'right',
        },
    },
    buttons: {
        marginLeft: 'auto',
        fontFamily: '\'Baloo 2\', cursive',
    },
}))

const OutlinedButtons = ({ setAsVolunteer }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button onClick={() => { setAsVolunteer(true) }} variant="contained" color="secondary" size="small" className={classes.buttons}>
                Volunteer
            </Button>
            <Button onClick={() => { setAsVolunteer(false) }} variant="contained" color="primary" size="small" className={classes.buttons}>
                Business Owner
            </Button>
        </div>
    )
}

const Account = ({
    id, avatar, props,
}) => {
    const [asVolunteer, setAsVolunteer] = useState(false)
    const [isPublic, setPublic] = useState(false)
    const handleChange = event => {
        setPublic(!isPublic)
    }

    return (
        <>
            <NavBar />
            <div
                className={classes.accounts}
            >
                <Card style={{
                    marginLeft: '1em',
                    marginTop: '3em',
                    display: 'flex',
                    width: '20vw',
                    transitionDuration: '0.3s',
                    height: '20vw',
                    textAlign: 'center',
                    color: 'black',
                    boxShadow: 'none',
                    borderWidth: '1.5px',
                    borderColor: 'grey',
                    borderStyle: 'solid',
                    borderRadius: '5px',
                }}
                >
                    <CardMedia className={classes.media} image={placeholder} title="User Picture" />
                    <CardContent>
                        <Text>
                            John Doe
                            <CreateOutlinedIcon fontSize="small" />
                        </Text>
                        <Text>
                            Hi! I run a small business in Vancouver.
                            Looking forward to meeting you all!
                            <CreateOutlinedIcon fontSize="small" />
                        </Text>
                        <Text>
                            johndoe@gmail.com
                            <CreateOutlinedIcon fontSize="small" />
                        </Text>
                        <Text>
                            (604)604-6040
                            <CreateOutlinedIcon fontSize="small" />
                        </Text>
                    </CardContent>
                </Card>
                <div style={{ marginLeft: '4em', marginTop: '3em' }}>
                    <div>
                        <OutlinedButtons setAsVolunteer={setAsVolunteer} />
                        <Text style={{ fontWeight: 'bold', marginBottom: '2em' }}>
                            Account
                        </Text>
                    </div>
                    {!asVolunteer && (
                        <>
                            <Text style={{ fontWeight: 'bold', marginBottom: '1em' }}>My Requests</Text>
                            <List>
                                {/* {myRequests && myRequests.map(() => ( */}
                                <ListItem
                                    key={id}
                                    style={{
                                        borderWidth: '1.5px',
                                        borderColor: 'grey',
                                        borderStyle: 'solid',
                                        borderRadius: '5px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>
                                        Request Title
                                        <ReadMoreReact
                                            text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n'
                                                + '\n'}
                                        />
                                    </Text>
                                    {/*    <ListItemIcon> */}
                                    {/*        <ArrowDropDownRoundedIcon /> */}
                                    {/*    </ListItemIcon> */}
                                    <Chip label="In Progress" color="primary" variant="outlined" size="small" />
                                    <ListItemIcon>
                                        <DeleteOutlinedIcon fontSize="small" color="secondary" />
                                    </ListItemIcon>
                                </ListItem>
                                {/* ))} */}
                            </List>
                            <Text style={{ fontWeight: 'bold', marginTop: '2em', marginBottom: '1em' }}>My Businesses</Text>
                            <ListItem
                                key={id}
                                style={{
                                    borderWidth: '1.5px',
                                    borderColor: 'grey',
                                    borderStyle: 'solid',
                                    borderRadius: '5px',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>
                                    Business Title
                                    <Text>
                                        Small, hand-curated boutique for clothing and houseware.
                                        <ListItemIcon>
                                            <ArrowDropDownRoundedIcon />
                                        </ListItemIcon>
                                    </Text>
                                </Text>
                                <ListItemIcon>
                                    <CreateOutlinedIcon fontSize="small" color="primary" />
                                </ListItemIcon>
                                <ListItemIcon>
                                    <DeleteOutlinedIcon fontSize="small" color="secondary" />
                                </ListItemIcon>
                            </ListItem>
                        </>
                    )}
                    {asVolunteer && (
                        <>
                            <Text style={{ fontWeight: 'bold', marginBottom: '1em' }}>My Tasks</Text>
                            <List>
                                {/* {myRequests && myRequests.map(() => ( */}
                                <ListItem
                                    key={id}
                                    style={{
                                        borderWidth: '1.5px',
                                        borderColor: 'grey',
                                        borderStyle: 'solid',
                                        borderRadius: '5px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <ListItemText primary="Task Title" secondary="Logo design for new store location." />
                                    <Chip label="In Progress" color="primary" variant="outlined" size="small" />
                                    <ListItemIcon>
                                        <ArrowDropDownRoundedIcon />
                                    </ListItemIcon>
                                </ListItem>
                                {/* ))} */}
                            </List>
                            <Text style={{ fontWeight: 'bold', marginTop: '2em', marginBottom: '1em' }}>Privacy Preferences</Text>
                            <List>
                                <ListItem
                                    key={id}
                                    style={{
                                        alignItems: 'flex-start',
                                        fontFamily: '\'Baloo 2\', cursive',
                                    }}
                                >
                                    <FormControlLabel
                                        control={(
                                            <Checkbox
                                                checked={isPublic}
                                                onChange={handleChange}
                                            />
                                        )}
                                    />
                                    <ListItemText primary="Mark myself as available" secondary="When checked, your profile will be available to everyone on the Volunteers page." />
                                </ListItem>
                            </List>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Account
