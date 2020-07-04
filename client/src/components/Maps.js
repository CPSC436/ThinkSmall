import React, { useState } from 'react'
import {
    GoogleMap, withGoogleMap, Marker, InfoWindow,
} from 'react-google-maps'
import { useGeolocation } from 'react-use'
import { LoadingIndicator } from './Form/components'
import { defaultBusinesses as businesses } from '../constant'
import classes from '../modules/maps.module.css'

function Maps() {
    const [selectedBusiness, setSelectedBusiness] = useState(null)
    const geo = useGeolocation()

    const Map = () => {
        const Markers = () => (
            <div>
                {businesses.map(business => (business.needsHelp
                    && (
                        <Marker
                            key={business.id}
                            position={{ lat: business.lat, lng: business.lng }}
                            onClick={() => {
                                setSelectedBusiness(business)
                            }}
                        />
                    )))}
            </div>
        )
function Map(businessesObj) {
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const businesses = businessesObj.businessesObj;
    const Markers = () => (
        <div>
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
        </div>
    );

        const InfoWindows = () => (
            <div>
                {selectedBusiness && (
                    <InfoWindow
                        position={{ lat: selectedBusiness.lat, lng: selectedBusiness.lng }}
                        onCloseClick={() => { setSelectedBusiness(null) }}
                    >
                        <div className={classes.root}>
                            <h3>{selectedBusiness.storeName}</h3>
                            <h4>
                                Address:&nbsp;
                                {selectedBusiness.streetAddress}
                            </h4>
                            <img className={classes.avatar} src={selectedBusiness.avatar} alt="" />
                        </div>
                    </InfoWindow>
                )}
            </div>
        )

        return (
            <GoogleMap defaultZoom={11.5} defaultCenter={{ lat: geo.latitude, lng: geo.longitude }}>
                <Markers />
                <InfoWindows />
            </GoogleMap>
        )
    }

    // must wrap the map with some more code for google maps to work
    const WrappedMap = withGoogleMap(Map)

    const DisplayMap = () => (
        <div style={{ width: '100vw', height: '100vh' }}>
            {geo.loading
                ? <LoadingIndicator />
                : (
                    <WrappedMap
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        businessesObj={businesses}
                    />
                )}
        </div>
    )

    return <DisplayMap />
}
const mapStateToProps = ({ businesses }) => ({ businesses });

export default Maps
export default connect(mapStateToProps)(Maps);
