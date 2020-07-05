import React, { Component } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login';

export class LoginBygoogle extends Component {
    constructor() {
        super();
        this.state = {
          userDetails: {},
          isUserLoggedIn: false
        };
      }
    
      responseGoogle = response => {
        this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
      };
    
      logout = () => {
        this.setState({isUserLoggedIn: false})
      };
    
      render() {
        return (
          <div className="App">
            {!this.state.isUserLoggedIn && (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_KEY}
                render={renderProps => (
                  <button
                    className="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Log in with Google
                  </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
            )}
            {this.state.isUserLoggedIn && (
              <div className="userDetails-wrapper">
                <div className="details-wrapper">
                  <GoogleLogout
                    render={renderProps => (
                      <button
                        className="logout-button"
                        onClick={renderProps.onClick}
                      >
                        Log Out
                      </button>
                    )}
                    onLogoutSuccess={this.logout}
                  />
    
                  <div className="image">
                    <img src={this.state.userDetails.imageUrl} />
                  </div>
                  <div className="name">
                    Welcome {this.state.userDetails.givenName}{" "}
                    {this.state.userDetails.familyName}
                  </div>
                  <div className="email"><i>{this.state.userDetails.email}</i></div>
                </div>
                <div className="bar" />
                <div className="stand" />
              </div>
            )}
          </div>
        );
      }
}
export default LoginBygoogle