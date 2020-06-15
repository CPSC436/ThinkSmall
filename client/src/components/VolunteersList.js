import React, {useState} from 'react';
import Tags from './Tags/Tags';
import Search from './Search';
import VolunteerCard from './VolunteerCard';
import classes from '../modules/list.module.css';
import {Pagination, PaginationItem} from '@material-ui/lab';

const VolunteersList = ({ volunteers }) => {
    const SearchBar = () => (
        <div className={classes.searchBar}>
            <Search />
            <Tags />
        </div>
    );
    const [currentPage, setPage] = useState(1);
    const handleChange = (event, currentPage) => {
        setPage(currentPage);
    }

    return (
        <div className={classes.root}>
            <SearchBar />
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>
                <Pagination
                    onChange={handleChange}
                    page={currentPage}
                    count={Math.ceil(volunteers.length / 6)}
                    renderItem={(item) => (
                        <PaginationItem {...item} />
                    )}
                />
            </div>

            <div className={classes.container}>
                {volunteers && volunteers
                    .slice((currentPage - 1) * 6, currentPage * 6)
                    .map(({ id, ...props }) => (
                    <VolunteerCard key={id} {...props} />
                ))}
            </div>
        </div>
    );
};

export default VolunteersList;
