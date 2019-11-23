let axios = require('axios');
module.exports = (req, res) => {
    axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "refresh_token",
            refresh_token: 'AQDoJJPTp4Tpp1WUr-MzB9rI1p-3aHu3hIuT866A9mMYGtUoJB6GkYZZFqPWrqDAMueN9f5Hq_LTwxj5NgCW64q6rTP2OMyGK-zKXxTeIKmxrOVAHKIrLsyyuPBnzBHMQRJxAg'
        },
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic OWY2YTZlMzk2ZTE3NDc2MDg4MjhkMmNmMjdkODE5YTQ6YjBlOWU0ODM4MDA4NDQ3YjhhZmI4MmU3YjExODUzNTE=' // client id and secret from env
        },

    })
    .then((response) => {
        console.log(response.data)
        res.send(response.data.access_token);
    })
    .catch((error) => {
        console.log(error)
    })
  }