import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import classes from '../../../modules/nav.module.css';
import { switchView } from '../../../actions/index';


const AntSwitch = withStyles(theme => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

function SmallSwitch({ toggleSwitch }) {
    const [state, setState] = React.useState({
        checkedC: false,
    });


    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
        toggleSwitch();
    };


    return (
        <div className={classes.button}>
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>List View</Grid>
                <Grid item>
                    <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                </Grid>
                <Grid item>Grid View</Grid>
            </Grid>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
        toggleSwitch: () => dispatch(switchView()),
    });

export default connect(null, mapDispatchToProps)(SmallSwitch);
