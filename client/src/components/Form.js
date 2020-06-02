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
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Tags from './Tags';

const Form = () => {
    const [open, setOpen] = useState(true);
    const [address, setAddress] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => setOpen(false);
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => setAddress(address))
            .catch(error => console.error('Error', error));
    };

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
                    To help us best understand your situation,
                    please provide details and type of help required of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input autoFocus margin="dense" fullWidth />
                <Text>Location</Text>

                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                >
                    {({
                        getInputProps, suggestions, getSuggestionItemProps, loading,
                    }) => (
                        <div>
                            <input
                                    {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        className: 'location-search-input',
                                    })}
                                    style={{
                                        width: 'calc(100% - 24px)',
                                        padding: '11.5px 11px',
                                        borderRadius: 4,
                                        border: '1px solid #ccc',
                                    }}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
                        </div>
                        )}
                </PlacesAutocomplete>

                <Text>Description of Business</Text>
                <Textarea aria-label="description" rowsMin={5} style={{ width: 'calc(100% - 5px)', fontFamily: 'sans-serif' }} />
                <Text>Request Details</Text>
                <Tags />
                <Textarea aria-label="details" rowsMin={5} style={{ width: 'calc(100% - 5px)', fontFamily: 'sans-serif' }} />
            </Content>
        </Dialog>
    );
};

export default Form;
