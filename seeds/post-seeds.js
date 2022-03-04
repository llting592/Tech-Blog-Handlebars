const { Post } = require('../models');

const postData = [{
        title: 'Test Post',
        content: 'test content',
        user_id: 1

    },
    {
        title: 'Test Post 2',
        content: 'test tst',
        user_id: 2
    },
    {
        title: 'Test Post 3',
        content: 'dummy content',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;