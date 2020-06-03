import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Card from './Card';
import Input from './Input';
import Sidebar from './Sidebar';
import src from '../../assets/yoga.png';

const useStyles = makeStyles({
    inbox: {
        minHeight: 333
    },
    filler: {
        display: 'flex',
        flexDirection: 'column',
        height: 314,
        justifyContent: 'center'
    },
    img: {
        display: 'block',
        margin: '30px auto',
        borderRadius: '50%'
    },
    card: {
        borderRadius: 5,
        cursor: 'pointer',
        padding: 5,
    }
});

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
        textAlign: 'center',
        margin: '0 auto',
    }
})(Typography);

const Inbox = ({ inbox }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState();
    const { title, messages } = inbox;

    const Filler = () => <div className={classes.filler}>
        <img className={classes.img} src={src} width={150} height={150} alt="filler" />
        <Text>This is your first conversation with your team</Text>
        <Text>Start the conversation!</Text>
    </div>;

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div
                style={{
                    background: '#fafafa',
                    borderRadius: 5,
                    // height: 395,
                    padding: 10,
                    width: 500,
                }}
            >
                <div style={{
                    height: 365,
                    overflow: 'scroll',
                    padding: 10,
                    boxSizing: 'border-box',
                }}>
                    <div className={classes.inbox}>
                        <Text>{title}</Text>
                        {messages.length === 0
                            ? <Filler />
                            : messages.map(({ id = 0, message, timestamp }, i) => (
                                <div
                                    key={i}
                                    className={classes.card}
                                    onClick={() => setSelected(i)}
                                >
                                    <Card id={id} message={message} timestamp={timestamp} />
                                </div>
                            ))}
                    </div>
                </div>
                <Input />
            </div>
        </div>
    )
};

const mapStateToProps = ({ conversations, conversation: id }) => ({ inbox: conversations[id] });

export default connect(mapStateToProps)(Inbox);
