let axios = require('axios');

const refreshToken = process.env.refreshtoken;
const userauth = process.env.userauth;
module.exports = (req, res) => {

    axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "refresh_token",
            refresh_token: refreshToken
        },
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${userauth}` // client id and secret from env
        },

    })
    .then((response) => {
        console.log(response.data + "Token = " + refreshToken)
        res.send(response.data.access_token);
    })
    .catch((error) => {
        console.log(error)
    })
  }