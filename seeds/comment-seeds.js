const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "this is so innovative"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing insight!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "oh wow! i like your posts,bookmarked!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "this is a new age!"
    },
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;