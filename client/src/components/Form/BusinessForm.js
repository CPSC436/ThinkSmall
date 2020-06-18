import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import ImageUploader from 'react-images-upload';
import {
    Actions,
    Content,
    ContentText,
    Input,
    LoadingIndicator,
    Text,
} from './components';
import classes from '../../modules/form.module.css';
import { addBusiness, closeForm } from '../../actions';

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

const Form = ({ open = false, closeForm, addBusiness }) => {
    const [address, setAddress] = useState('');
    const [storeName, setStoreName] = useState('');
    const [avatar, setAvatar] = useState();
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => setAddress(address))
            .catch(error => console.error('Error', error));
    };

    const onClose = () => {
        setAddress('');
        setStoreName('');
        setAvatar('');
        setDescription('');
        closeForm('business');
    }

    const onSubmit = e => {
        addBusiness(storeName, avatar, 'Dummy Name', address, description, true, tags);
        onClose();
    };

    const Suggestions = ({ loading, suggestions, getSuggestionItemProps }) => (
        <div className={['autocomplete-dropdown-container', classes.suggestions]}>
            {loading
                ? <LoadingIndicator />
                : suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                    const style = suggestion.active
                        ? styles.active
                        : styles.inactive;
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

    const PlacesInput = ({ getInputProps, ...props }) => (
        <div>
            <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                })}
                className={classes.input}
            />
            {address && <Suggestions {...props} />}
        </div>
    );

    const onDrop = files => {
        const reader = new FileReader();
        reader.onload = e => setAvatar(e.target.result);
        reader.readAsDataURL(files[0]);
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="business-form"
        >
            <Title id="business-form" disableTypography>Add a new business</Title>
            <Content>
                <ContentText>
                    To help us best understand your situation,
                    please provide details of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input
                    autoFocus
                    margin="dense"
                    fullWidth
                    placeholder="e.g. Hunter & Hare"
                    value={storeName}
                    onChange={e => setStoreName(e.target.value)}
                />
                <Text>Business Icon</Text>
                <ImageUploader
                    withIcon
                    buttonText="Choose images"
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview
                />
                <Text>Location</Text>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={onSelect}>
                    {PlacesInput}
                </PlacesAutocomplete>
                <Text>Description of Business</Text>
                <Textarea
                    className={classes.textarea}
                    aria-label="description"
                    rowsMin={5}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="outlined" onClick={onSubmit}>Submit</Button>
            </Actions>
        </Dialog>
    );
};

const mapStateToProps = ({ forms }) => ({ open: forms.business })

export default connect(mapStateToProps, { addBusiness, closeForm })(Form);
