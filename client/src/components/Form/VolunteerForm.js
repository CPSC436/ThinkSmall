import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core';
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components';
import Tags from '../Tags/Tags';
import classes from '../../modules/form.module.css';

const styles = {
    active: {
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
    inactive: {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
};

const VolunteerForm = ({ open, handleClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="request-form"
        >
            <Title id="request-form" disableTypography>Volunteer Registration Form</Title>
            <Content>
                <ContentText>
                    To help small businesses with your talent,
                    please provide your list of skill sets that you are willing to provide.
                </ContentText>
                <Text>Name of Volunteer</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />
                <Text>List of Skillset</Text>
                <Tags canAdd />
                <Textarea className={classes.textarea} aria-label="description" rowsMin={5} />
                <Text>Portfolio or resume link</Text>
                <Textarea className={classes.textarea} aria-label="details" rowsMin={5} />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleClose}>Submit</Button>
            </Actions>
        </Dialog>
    );
};

export default VolunteerForm;
