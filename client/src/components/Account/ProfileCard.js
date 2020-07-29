import React, { useEffect, useState } from 'react'
import {
    Button, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { AccountCircle, PhotoCamera } from '@material-ui/icons'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import { EditIcon, PhoneIcon } from './Icons'
import Tags from '../Tags/Tags'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'
import { updateUser } from '../../actions'
import { DottedChip } from '../Tags/components'
import SelectedChip from '../Tags/components/SelectedChip'

// const Text = withStyles({
//     root: {
//         fontFamily: '\'Baloo 2\', cursive',
//     },
// })(Typography)

const ProfileCard = ({
    givenName, familyName, imageUrl, description, email, phone, supplementaryUrl, tags, _id, updateUser,
}) => {
    const [values, setValues] = useState({
        givenName,
        familyName,
        description,
        email,
        phone,
        supplementaryUrl,
        tags,
        imageUrl,
    })

    useEffect(() => {
        // force re-render on change of imageUrl
    }, [imageUrl])

    const handleChange = field => event => {
        setValues({ ...values, [field]: event.target.value })
        console.log(`Values: ${values[field]}`)
    }
    const handleSubmit = () => {
        updateUser(_id, values)
    }
    const onDrop = files => {
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        setValues({ ...values, [imageUrl]: files[0] })
        console.log('Updated image url;')
    }
    return (
        <Card className={classes.profile}>
            <CardMedia className={classes.media} image={imageUrl || placeholder} title="User Picture">
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" onChange={onDrop}>
                        Upload
                        {'  '}
                        <PhotoCamera />
                    </Button>
                </label>
            </CardMedia>
            <CardContent>
                <FormControl>
                    <TextField
                        style={{ fontWeight: 'bold' }}
                        defaultValue={`${givenName}`}
                        label="Name"
                        onChange={handleChange('givenName')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ fontWeight: 'bold' }}
                        defaultValue={`${familyName}`}
                        label="Name"
                        onChange={handleChange('familyName')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ paddingTop: '0.5em' }}
                        defaultValue={description}
                        label="Description"
                        onChange={handleChange('description')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EditIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ paddingTop: '1rem' }}
                        defaultValue={email}
                        label="Email"
                        onChange={handleChange('email')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailSharpIcon size="small" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ paddingTop: '1rem' }}
                        defaultValue={phone}
                        label="Phone Number"
                        onChange={handleChange('phone')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ paddingTop: '1rem' }}
                        // defaultValue={(<a href={supplementaryUrl}>{supplementaryUrl}</a>)}
                        defaultValue={supplementaryUrl}
                        label="Supplementary URLs"
                        onChange={handleChange('supplementaryUrl')}
                    />
                    {supplementaryUrl && (
                        <a href={supplementaryUrl}>{supplementaryUrl}</a>
                    )}
                    {tags.length > 0 && <Tags tags={tags} />}
                    <DottedChip />
                    <Button type="button" variant="contained" size="small" className={classes.buttons} onClick={handleSubmit}>
                        Update Info
                    </Button>
                </FormControl>
            </CardContent>
        </Card>
    )
}

const mapDispatchToProps = {
    updateUser,
}

export default connect(null, mapDispatchToProps)(ProfileCard)
