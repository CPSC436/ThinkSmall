import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'

const ArrowIcon = ({ expanded, ...props }) => (
    <ArrowDropDownRoundedIcon
        {...props}
        style={{
            cursor: 'pointer',
            transform: `rotate(${expanded ? 180 : 0}deg)`,
            transition: '.3s',
        }}
    />
)

const EditIcon = () => (
    <CreateOutlinedIcon
        fontSize="small"
        style={{
            color: 'grey',
            width: '1em',
            height: '0.7em',
        }}
    />
)

const DeleteIcon = () => (
    <DeleteOutlinedIcon
        fontSize="small"
        color="secondary"
    />
)

const PhoneIcon = () => (
    <PhoneIphoneOutlinedIcon
        fontSize="small"
        style={{
            color: 'grey',
            width: '1em',
            height: '0.7em',
        }}
    />
)

const SaveIcon = () => (
    <Icon icon="save" style={{ marginLeft: '0.5em' }} />
)

export {
    ArrowIcon, DeleteIcon, EditIcon, PhoneIcon, SaveIcon,
}
