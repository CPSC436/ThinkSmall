import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
<<<<<<< HEAD
import { useTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle as Title,
    DialogContent,
    DialogContentText,
    TextareaAutosize as Textarea,
    Typography,
    OutlinedInput,
} from '@material-ui/core';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Tags from './Tags';
import loader from '../assets/loader.svg';

const Actions = withStyles(theme => ({
    root: {
        padding: '16px 24px',
    },
}))(DialogActions);

const Content = withStyles(theme => ({
    root: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}))(DialogContent);

const ContentText = withStyles(theme => ({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
}))(DialogContentText);

const Text = withStyles(theme => ({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
}))(Typography);

const Input = withStyles(theme => ({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
}))(OutlinedInput);

const Suggestions = ({ loading, suggestions, getSuggestionItemProps }) => (
    <div
        className="autocomplete-dropdown-container"
        style={{
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: 4,
            border: '1px solid #ccc',
            borderTop: 'none',
        }}
    >
        {loading
            ? <LoadingIndicator />
            : suggestions.map(suggestion => {
                const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                const style = suggestion.active
                    ? {
                        backgroundColor: '#fafafa', cursor: 'pointer', padding: '7.5px 10px', fontSize: 'small', borderRadius: 4,
                    }
                    : {
                        backgroundColor: '#ffffff', cursor: 'pointer', padding: '7.5px 10px', fontSize: 'small', borderRadius: 4,
                    };
                return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                );
            })}
    </div>
);

const LoadingIndicator = () => (
    <div style={{ padding: 50 }}>
        <img id="loading" src={loader} />
        <p style={{ textAlign: 'center', fontSize: 'small' }}>Loading...</p>
    </div>
);

const useStyles = makeStyles(theme => ({
    textarea: {
        maxWidth: '100%',
        minWidth: '100%',
        fontFamily: '\'Baloo 2\', cursive',
        borderRadius: 4,
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        padding: '11.5px 11px',
    },
}));

const Form = () => {
    const [open, setOpen] = useState(true);
    const [address, setAddress] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClose = () => setOpen(false);
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => setAddress(address))
            .catch(error => console.error('Error', error));
    };

    const PlacesInput = ({ getInputProps, ...props }) => (
        <div>
            <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                })}
                style={{
                    width: '100%',
                    padding: '7.5px 11px',
                    borderRadius: 4,
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                }}
            />
            {address && <Suggestions {...props} />}
        </div>
    );
=======
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
>>>>>>> 69494d1... Fix indentation AND create Form component

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="request-form"
        >
<<<<<<< HEAD
            <Title id="request-form" disableTypography>File a new request</Title>
            <Content>
                <ContentText>
                    To help us best understand your situation,
                    please provide details and type of help required of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="e.g. Hunter & Hare" />
                <Text>Location</Text>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                    {PlacesInput}
                </PlacesAutocomplete>
                <Text>Description of Business</Text>
                <Textarea className={classes.textarea} aria-label="description" rowsMin={5} />
                <Text>Request Details</Text>
                <Tags />
                <Textarea className={classes.textarea} aria-label="details" rowsMin={5} />
            </Content>
            <Actions>
                <Button variant="outlined">Cancel</Button>
                <Button variant="outlined">Submit</Button>
            </Actions>
        </Dialog>
    );
};
=======
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
>>>>>>> 69494d1... Fix indentation AND create Form component

export default Form;
