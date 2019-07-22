import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignOut from "./pages/signInAndSignOut/SignInAndSignOut";
import {auth} from './firebase/firebase';

class App extends React.Component {

    state = {
        currentUser: null
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/signin" component={SignInAndSignOut}/>
                </Switch>
            </div>
        );
    }

}

export default App;
