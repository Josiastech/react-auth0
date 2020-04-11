import auth0 from 'auth0-js';

export default class Auth {
    // We'll pass React Router's history in
    // so Auth can perform redirects.
    constructor(history) {
        this.history = history;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENTID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
            responseType: "token id_token", // Give us an access token so the user can make API calls.
            scope: "openid profile"
        })
    }
}