import React from 'react';
import Tags from './Tags';

const List = ({ businesses, volunteers }) => (
    <>
        {businesses && 'businesses'}
        {volunteers && 'volunteers'}
        <Tags />
    </>
);

export default List;
