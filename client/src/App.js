import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Form from './components/Form/Form';
import Inbox from './components/Inbox/Inbox';
import List from './components/List';
import NavBar from './components/NavBar/NavBar';
import { businesses, volunteers } from './constant';
import './App.css';

library.add(fab, faPaperPlane);

function App() {
    const [open, setOpen] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="Business" handleOpen={() => setOpen(true)} />
                    <List businesses={businesses} />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="Volunteer" />
                    <List volunteers={volunteers} />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
            <Form open={open} handleClose={() => setOpen(false)} />
        </Router>
    );
}

export default App;
