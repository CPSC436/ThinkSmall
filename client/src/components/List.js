import React from 'react';

const List = ({ businesses, volunteers }) => (
    <>
        {businesses && 'businesses'}
        {volunteers && 'volunteers'}
    </>
);

export default List;
