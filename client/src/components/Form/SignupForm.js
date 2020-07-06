import React from 'react'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core'
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components'
import Tags from '../Tags/Tags'
import { closeForm } from '../../actions'
import classes from '../../modules/form.module.css'

const SignupForm = ({ open = false, closeForm }) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const onClose = () => closeForm('sign_up')

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="signup-form"
        >
            <Title id="signup-form" disableTypography>Signup Form</Title>
            <Content>
                <ContentText>
                    Please provide the following information or get started with google
                </ContentText>
                <Text>First Name</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" className="input" />

                <Text>Last Name</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />

                <Text>Email</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />

                <Text>Password</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />

                <Text>Confirm Password</Text>
                <Input autoFocus margin="dense" fullWidth placeholder="" />

            </Content>
            <Actions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="outlined" onClick={onClose}>Submit</Button>
            </Actions>
        </Dialog>
    )
}

const mapStateToProps = ({ forms }) => ({ open: forms.sign_up })
export default connect(mapStateToProps, { closeForm })(SignupForm)
