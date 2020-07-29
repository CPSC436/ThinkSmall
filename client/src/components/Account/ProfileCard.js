import React, { useEffect, useState } from 'react'
import {
    Button, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { AccountCircle, PhotoCamera, TextFields } from '@material-ui/icons'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import S3 from 'react-aws-s3'
import ImageUploader from 'react-images-upload'
import { EditIcon, PhoneIcon, SaveIcon } from './Icons'
import Tags from '../Tags/Tags'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'
import { getBusinesses, updateUser } from '../../actions'
import { DottedChip } from '../Tags/components'
import Form from '../Form/BusinessForm'
import { Content } from '../Form/components'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

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
    const config = {
        bucketName: 'thinksmall',
        region: 'ca-central-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }
    const Client = new S3(config)
    const [image, setImage] = useState(imageUrl)
    const [canEdit, allowEdit] = useState(false);

    useEffect(() => {

    }, [image])

    const fields = [{
        key: 'givenName',
        label: 'Given Name',
        defaultValue: givenName,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            ),
        },
    }, {
        key: 'familyName',
        label: 'Family Name',
        defaultValue: familyName,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            ),
        },
    }, {
        key: 'description',
        label: 'Description',
        defaultValue: description,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <EditIcon />
                </InputAdornment>
            ),
        },
    }, {
        key: 'email',
        label: 'Email',
        defaultValue: email,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <EmailSharpIcon size="small" />
                </InputAdornment>
            ),
        },
    }, {
        key: 'phone',
        label: 'Phone Number',
        defaultValue: phone,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <PhoneIcon />
                </InputAdornment>
            ),
        },
    }, {
        key: 'supplementaryUrl',
        label: 'Resume/Portfolio',
        defaultValue: supplementaryUrl,
        InputProps: {
            startAdornment: (
                <InputAdornment position="start">
                    <PhoneIcon />
                </InputAdornment>
            ),
        },
    }]

    const handleEdit = () => {
        allowEdit(true)
    }

    const handleChange = field => event => {
        setValues({ ...values, [field]: event.target.value })
        console.log(`Values: ${values[field]}`)
    }

    const handleSubmit = async () => {
        const imageUrl = await onSave(image)
        updateUser(_id, values)
        allowEdit(false)
    }

    const onDrop = e => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onload = () => {
            if (file) {
                reader.readAsDataURL(file)
                setValues({ ...values, imageUrl: file })
            }
        }
        console.log('Updated image url;')
    }

    async function onSave(file) {
        if (file) {
            try {
                const res = await Client.uploadFile(file)
                return res.location
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <Card className={classes.profile}>
            <CardMedia className={classes.media} image={image || placeholder} title="User Picture">
                <form onSubmit={handleSubmit}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        type="file"
                        onChange={onDrop}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                            {'  '}
                            <PhotoCamera />
                        </Button>
                    </label>
                </form>
            </CardMedia>
            <CardContent>
                {canEdit
                    ? <FormControl>
                        {fields.map(({ key, ...props }) => (
                            <TextField
                                key={key}
                                onChange={handleChange(key)}
                                {...props}
                            />
                        ))}
                        {tags.length > 0 && <Tags tags={tags} />}
                        <DottedChip />
                        <Button
                            style={{
                                textTransform: 'capitalize', width: '100%', borderColor: 'black', marginTop: '1rem',
                            }}
                            size="small"
                            variant="outlined"
                            onClick={handleSubmit}
                        >
                            Save
                            {' '}
                            <SaveIcon />
                        </Button>
                    </FormControl>
                    : <>
                        <Text style={{ fontWeight: 'bold' }}>{`${givenName} ${familyName}`}</Text>
                        {description && <Text>{description}</Text>}
                        {email && <Text>{`@ ${email}`}</Text>}
                        {phone && (
                            <Text>
                                <PhoneIcon />
                                {' '}
                                {phone}
                            </Text>
                        )}
                        {supplementaryUrl && (
                            <Text>
                                <a href={supplementaryUrl}>{supplementaryUrl}</a>
                            </Text>
                        )}
                        {tags.length > 0 && <Tags tags={tags} />}
                        <Button
                            style={{
                                textTransform: 'capitalize', width: '100%', borderColor: 'black', marginTop: '1rem',
                            }}
                            size="small"
                            variant="outlined"
                            onClick={handleEdit}
                        >
                            Edit
                            {' '}
                            <EditIcon />
                        </Button>
                    </>
                }
            </CardContent>
        </Card>
    )
}

const mapDispatchToProps = {
    updateUser,
}

export default connect(null, mapDispatchToProps)(ProfileCard)
