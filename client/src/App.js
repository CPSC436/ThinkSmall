import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <List businesses />
                </Route>
                <Route path="/volunteers">
                    <List volunteers />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
