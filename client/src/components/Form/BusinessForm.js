import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import {
    Button,
    Dialog, DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ImageUploader from 'react-images-upload';
import {
    Actions,
    Content, ContentText, Text,
    Input, Autocomplete,
} from './components';
import { addBusiness, closeForm } from '../../actions';
import classes from '../../modules/form.module.css';

const Form = ({ open = false, closeForm, addBusiness }) => {
    const [location, setLocation] = useState('');
    const [storeName, setStoreName] = useState('');
    const [avatar, setAvatar] = useState();
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onSelect = location => {
        geocodeByAddress(location)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => setLocation(location))
            .catch(error => console.error('Error', error));
    };

    const onClose = () => {
        setStoreName('');
        setAvatar('');
        setLocation('');
        setDescription('');
        closeForm('business');
    };

    const onSubmit = e => {
        const business = {
            storeName,
            avatar,
            storeOwner: 'Dummy Name',
            location,
            description,
            needsHelp: true,
            tags,
        };
        addBusiness(business);
        onClose();
    };

    const onDrop = files => {
        const reader = new FileReader();
        reader.onload = e => setAvatar(e.target.result);
        reader.readAsDataURL(files[0]);
    };

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
                    buttonText="Choose images"
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage
                    withIcon
                    withPreview
                />
                <Text>Location</Text>
                <Autocomplete value={location} onChange={setLocation} onSelect={onSelect} />
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

const mapStateToProps = ({ forms }) => ({ open: forms.business });

export default connect(mapStateToProps, { addBusiness, closeForm })(Form);
