import React, { useEffect, useState } from 'react'
import {
    Button, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { AccountCircle, PhotoCamera } from '@material-ui/icons'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import S3 from 'react-aws-s3'
import ImageUploader from 'react-images-upload'
import { EditIcon, PhoneIcon } from './Icons'
import Tags from '../Tags/Tags'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'
import {getBusinesses, updateUser} from '../../actions'
import { DottedChip } from '../Tags/components'
import Form from '../Form/BusinessForm'
import { Content } from '../Form/components'

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
    const config = {
        bucketName: 'thinksmall',
        region: 'ca-central-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }
    const Client = new S3(config)
    const [image, setImage] = useState(imageUrl)
    useEffect(() => {

    }, [image])

    const handleChange = field => event => {
        setValues({ ...values, [field]: event.target.value })
        console.log(`Values: ${values[field]}`)
    }
    const handleSubmit = async () => {
        const imageUrl = await onSave(image)
        updateUser(_id, values)
    }
    const handleImageChange = e => {
        e.preventDefault()
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onloadend = () => {
            if (file) {
                reader.readAsDataURL(file)
                setValues({ ...values, [imageUrl]: file })
                setImage(file)
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
                        onChange={e => handleImageChange(e)}
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
                <FormControl>
                    <TextField
                        style={{ fontWeight: 'bold' }}
                        defaultValue={`${givenName}`}
                        label="First Name"
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
                        label="Last Name"
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
                        defaultValue={supplementaryUrl}
                        placeholder="Add additional URLs here"
                        label="Supplementary URLs"
                        onChange={handleChange('supplementaryUrl')}
                    />
                    {tags.length > 0 && <Tags tags={tags} />}
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
