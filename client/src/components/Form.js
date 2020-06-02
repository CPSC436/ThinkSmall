import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
    Dialog,
    DialogTitle as Title,
    DialogContent as Content,
    DialogContentText as ContentText,
    TextareaAutosize as Textarea,
    Typography as Text,
    OutlinedInput as Input,
} from '@material-ui/core';
import Tags from './Tags';

const Form = () => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => setOpen(false);

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="request-form"
        >
            <Title id="request-form">File a new request</Title>
            <Content style={{ marginBottom: 30 }}>
                <ContentText>
                    To help us best understand your situation, please provide details and type of help
                    required of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input autoFocus margin="dense" fullWidth />
                <Text>Location</Text>
                <Input margin="dense" fullWidth />
                <Text>Description of Business</Text>
                <Textarea aria-label="description" rowsMin={5} style={{ width: 'calc(100% - 5px)', fontFamily: 'sans-serif' }} />
                <Text>Request Details</Text>
                <Tags />
                <Textarea aria-label="details" rowsMin={5} style={{ width: 'calc(100% - 5px)', fontFamily: 'sans-serif' }} />
            </Content>
        </Dialog>
    );
}

export default Form;
