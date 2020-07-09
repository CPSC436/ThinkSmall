import React, { useState } from 'react'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core'
import { text } from '@fortawesome/fontawesome-svg-core'
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components'
import Tags from '../Tags/Tags'
import { closeForm } from '../../actions'
import LoginByGoogle from '../LoginByGoogle'
import { addUser } from '../../actions/user'

const SignupForm = ({ open = false, closeForm, addUser }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordMatchState, setPasswordMatchState] = useState(false)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const onClose = () => closeForm('sign_up')

    function handleSubmit(event) {
        event.preventDefault()

        if (password !== confirmPassword) {
            setPasswordMatchState(true)
        }

        if (password === confirmPassword) {
            setPasswordMatchState(false)
            const payload = {
                givenName: firstName,
                familyName: lastName,
                email,
            }
            addUser(payload)
            onClose()
        }
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="signup-form"
        >
            <Title id="signup-form" disableTypography>Please enter your information in the form or use google to signup</Title>

            <Content>

                <form onSubmit={handleSubmit}>
                    <Text>First Name</Text>

                    <Input autoFocus margin="dense" fullWidth placeholder="" className="input" onChange={e => setFirstName(e.target.value)} required />

                    <Text>Last Name</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" onChange={e => setLastName(e.target.value)} required />

                    <Text>Email</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" onChange={e => setEmail(e.target.value)} type="email" required />

                    <Text>Password</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" type="password" id="password" onChange={e => setPassword(e.target.value)} required />

                    <Text>Confirm Password</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" type="password" id="confirm_password" onChange={e => setConfirmPassword(e.target.value)} required />
                    { passwordMatchState && <Text>Your Password does not match</Text> }

                    <Actions>

                        <Button style={{ width: '50%' }} variant="outlined" label="Submit" type="submit">Submit</Button>
                        <Button style={{ width: '50%' }} variant="outlined" onClick={onClose}>Cancel</Button>

                    </Actions>

                    <hr />

                    <LoginByGoogle />

                    <br />

                </form>
            </Content>

        </Dialog>
    )
}

const mapStateToProps = ({ forms }) => ({ open: forms.sign_up })
export default connect(mapStateToProps,
    { closeForm, addUser: payload => addUser(payload) })(SignupForm)
