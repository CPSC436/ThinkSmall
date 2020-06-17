import React, { useState } from 'react';
import {
 GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps';
import { Info } from '@material-ui/icons';
import { businesses } from '../constant';
import classes from '../modules/maps.module.css';


function Map() {
    const [selectedBusiness, setSelectedBusiness] = useState(null);

    return (
        <GoogleMap
        defaultZoom={11.5}
        defaultCenter={{ lat: 49.282730, lng: -123.120735 }}
        >
            {businesses.map(business => (business.needsHelp
                && (
                <Marker
                    key={business.id}
                    position={{ lat: business.lat, lng: business.lng }}
                    onClick={() => {
                        setSelectedBusiness(business);
                    }}
                />
)))}

            {selectedBusiness && (
            <InfoWindow
                position={{ lat: selectedBusiness.lat, lng: selectedBusiness.lng }}
                onCloseClick={() => {
                    setSelectedBusiness(null);
                }}
            >
                <div className={classes.root}>
                    <h3>{selectedBusiness.storeName}</h3>
                    <h4>
                        Address:
                        {selectedBusiness.streetAddress}
                    </h4>
                    {/* <img src={selectedBusiness.avatar} alt=""/> */}

                </div>
            </InfoWindow>
        )}
        </GoogleMap>
);
}

// must wrap the map with some more code for google maps to work
const WrappedMap = withScriptjs(withGoogleMap(Map));

function Maps() {
    return (

        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=REACT_APP_API_KEY"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}

            />
        </div>
    );
}

export default Maps;
