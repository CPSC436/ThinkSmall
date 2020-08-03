import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Chip, IconButton,
    ListItem, ListItemText, ListItemIcon,
} from '@material-ui/core'
import {ArrowIcon, DeleteIcon, EditIcon} from './Icons'
import {deleteRequest} from '../../actions'
import { now } from '../../reducers/helper'

const RequestItem = ({
    _id, business, details, status, createdAt, deleteRequest, canDelete, requests, index, actions,
}) => {
    const [expanded, setExpanded] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <ListItem
            style={{
                border: '1px solid black',
                borderRadius: '5px',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                margin: '5px auto',
            }}
        >
            <div>
                <ListItemText primary={business} secondary={details} />
                <div>
                    <IconButton  onClick={() => {
                        actions[0].action(); setOpen(!open)
                    }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteRequest(requests[index]._id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
                <Chip label={status} color="primary" variant="outlined" size="small" style={{ fontFamily: `'Baloo 2', cursive` }} />
                {expanded && (
                    <p style={{ fontSize: 'small', marginBottom: 0 }}>
                        Created at
                        {' '}
                        {now(createdAt)}
                    </p>
                )}
            </div>
            <ArrowIcon expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
        </ListItem>
    )
}

export default connect(null, { deleteRequest })(RequestItem)
