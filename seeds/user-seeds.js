const { User } = require('../models');

const userData = [{
        username: 'Bob',
        password: 'bob123'

    },
    {
        username: 'Jim',
        password: 'jim123'
    },
    {
        username: 'Billy',
        password: 'billy123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;