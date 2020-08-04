import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    IconButton, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { ArrowIcon, DeleteIcon, EditIcon } from './Icons'
import Tags from '../Tags/Tags'
import { deleteBusiness, openForm, updateBusiness } from '../../actions'

const BusinessItem = ({
    storeName, storeOwner, location, tags, description,
    deleteBusiness, index, canDelete, owns, actions,
}) => {
    const [expanded, setExpanded] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <ListItem
            style={{
                alignItems: 'flex-start',
                border: '1px solid black',
                borderRadius: '5px',
                justifyContent: 'space-between',
                margin: '5px auto',
            }}
        >
            <div>
                <ListItemText primary={storeName} secondary={description} />
                <div>
                    <IconButton
                        hidden={open}
                        onClick={() => {
                            actions[1].action()
                            setOpen(!open)
                        // updateBusiness(owns[index]._id, )
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        console.log(owns[index]._id)
                        deleteBusiness(owns[index]._id)
                    }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
                {expanded && (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon icon="user" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                            <span>{storeOwner}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon icon="map-marker-alt" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                            <span>{location}</span>
                        </div>
                        {tags.length > 0 && <Tags tags={tags} />}
                    </div>
                )}
            </div>
            <ArrowIcon expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
        </ListItem>
    )
}

export default connect(null, { deleteBusiness, updateBusiness })(BusinessItem)
