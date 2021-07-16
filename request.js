

// const axios = require('axios');

const { default: axios } = require("axios")

// axios.get('https://reqres.in/api/users?page=2').then(
//        function(response) {
//            console.log(response)
//         })
// .catch(function (err) {
//     console.log(err)
// })
// .then(function() {})
axios.defaults.baseURL ='https:regres.in/api';
axios.post ('/users', {
    "name": "Jolo", 
    "job": "QA"
}).then(
    function(response) {
        console.log(response.status)
        console.log(response)
})
.catch(function (err) {
   console.log(err)
})
.then(function() {})
