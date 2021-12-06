const axios = require('axios');

const getUsers = async users => {

    const res = await new Promise((resolve, reject) => {
        axios.get(`https://jsonplaceholder.typicode.com/${users}`)
            .then(({ data }) => {
                return resolve(data);
            })
            .catch(error => {
                return reject(error);
            })

    });

    console.log('RESPONSE', res);

};

getUsers('users');