import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { StylesProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Home from './components/Home'
import BusinessForm from './components/Form/BusinessForm'
import RequestForm from './components/Form/RequestForm'
import VolunteerForm from './components/Form/VolunteerForm'
import SignupForm from './components/Form/SignupForm'
import LoginForm from './components/Form/LoginForm'
import Inbox from './components/Inbox/Inbox'
import BusinessesList from './components/List/BusinessesList'
import VolunteersList from './components/List/VolunteersList'
import NavBar from './components/NavBar/NavBar'
import Maps from './components/Maps'
import './App.css'
import LoginByGoogle from './components/LoginByGoogle'
import Account from './components/Account'

library.add(
    fab,
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faUser,
)

function App({ switchState }) {
    return (
        <StylesProvider injectFirst>
            <Router>
                <Switch>
                    <Route path="/businesses">
                        <NavBar userType="business" />
                        {switchState ? <Maps /> : <BusinessesList />}
                        <BusinessForm />
                        <RequestForm />
                    </Route>
                    <Route path="/volunteers">
                        <NavBar userType="volunteer" />
                        <VolunteersList />
                        <VolunteerForm />
                    </Route>
                    <Route path="/inbox">
                        <NavBar />
                        <Inbox />
                    </Route>
                    <Route path="/account">
                        <NavBar />
                        <Account />
                    </Route>
                    <Route path="*">
                        <NavBar userType="entry" />
                        <Home />
                        <SignupForm />
                        <LoginForm />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}

const mapStateToProps = ({ switchState }) => ({ switchState })

export default connect(mapStateToProps)(App)
