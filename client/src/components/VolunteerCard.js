import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 140,
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30',
    },
});

const VolunteerCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                wide
                className={classes.media}
                image={props.avatar}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h6">
                        {props.volunteerName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                        <Button size="small" color="primary" target="_blank">
                            Read More
                        </Button>
                    </Typography>
                    <Divider className="MuiDivider-root" light />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" target="_blank">
                    Start Conversation
                </Button>
            </CardActions>
        </Card>
    );
};

export default VolunteerCard;
