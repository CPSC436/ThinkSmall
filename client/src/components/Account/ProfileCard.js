import React, { useEffect, useState } from 'react'
import {
    Button, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import { connect } from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { AccountCircle } from '@material-ui/icons'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import S3 from 'react-aws-s3'
import ImageUploader from 'react-images-upload'
import { EditIcon, PhoneIcon } from './Icons'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'
import { updateUser } from '../../actions'
import { SelectedChip, UnselectedChip } from '../Tags/components'
import { defaultSkillTags } from '../../constant'

const ProfileCard = ({
    givenName, familyName, imageUrl, description, email, phone, supplementaryUrl, tags, _id, updateUser,
}) => {
    const [values, setValues] = useState({
        givenName,
        familyName,
        description,
        email,
        phone,
        tags,
        supplementaryUrl,
        imageUrl,
    })
    const config = {
        bucketName: 'thinksmall',
        region: 'ca-central-1',
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }
    const Client = new S3(config)
    const [skillTags, setSkillTags] = useState([...defaultSkillTags])
    const [image, setImage] = useState(imageUrl)

    useEffect(() => {
        async function updateImage() {
            setValues({ ...values, [imageUrl]: await onSave(image) })
        }
        updateImage()
    }, [image])

    const selectTag = i => {
        skillTags[i].selected = !skillTags[i].selected
        setSkillTags([...skillTags])
    }

    const handleChange = field => event => {
        setValues({ ...values, [field]: event.target.value })
    }
    const handleSubmit = async () => {
        // setValues({ ...values, [imageUrl]: await onSave(image) })
        updateUser(_id, {
            ...values,
            tags: skillTags.filter(({ selected }) => selected)
                .map(({ label }) => ({ label })),
            imageUrl: image,
        })
        console.log(`Image updated submit: ${image}`)
    }

    const onDrop = files => {
        const reader = new FileReader()
        if (files[0]) {
            reader.readAsDataURL(files[0])
            setImage(files[0])
            console.log(`Image updated: ${image}`)
        }
    }
    async function onSave(file) {
        if (file) {
            try {
                const res = await Client.uploadFile(file)
                return res.location
            } catch (err) {
                console.error(err)
            }
        }
    }

    return (
        <Card className={classes.profile}>
            <CardMedia className={classes.media} image={imageUrl || placeholder} title="User Picture" />
            <CardContent>
                <FormControl>
                    <ImageUploader
                        buttonText="Update Profile Picture"
                        onChange={onDrop}
                        imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        singleImage
                        withIcon
                        withPreview
                        fileSizeError="file size is too big"
                    />
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
                    <div className={classes.skillTags}>
                        {skillTags.map(({ label, selected }, i) => (
                            selected
                                ? <SelectedChip key={label} label={label} onClick={() => selectTag(i)} />
                                : <UnselectedChip key={label} label={label} onClick={() => selectTag(i)} />
                        ))}
                    </div>
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
