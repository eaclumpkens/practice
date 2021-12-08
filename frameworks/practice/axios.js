const axios = require('axios');

const log = false; // error logs

const getUsers = users => {
    let success = false;
    let res;
    
    new Promise(resolve => {
        axios.get(`https://jsonplaceholder.typicode.com/${users}`)
        .then(({ data }) => {
            success = true;
            res = data;
        })
        .catch(error => {
            const { response = {} } = error;
            const { status, statusText } = response;

            log && console.error({ status, statusText });
            res = 'No Results Found';
        })
        .finally(() => {
            console.log({ success, res });
            return resolve({ success, res })
        })
    });
};


getUsers('users'); // valid test
getUsers('sdaff'); // invalid test