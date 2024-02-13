const { Post } = require('../models');

const postData = [
    {
        title: "ARTIFICIAL INTELLIGENCE",
        post_content: "AI, which stands for Artificial Intelligence (but I'm sure you knew that) can actually be placed under the Trends section. I chose to separate them because I think it gained some big popularity over the last 2 years, and you can easily find lots of resources online",
        user_id: 3
    },
    {
        title: "PROGRAMMING LANGUAGES",
        post_content: "Python certainly this one is considered a more “grown-up” programming language than the above-mentioned PHP. It is fairly popular hence its usage in web-development. Furthermore, it is one of the popular choices across universities.",
        user_id: 1
    },
    {
        title: " Computing Power ",
        post_content: "Computing power has already established its place in the digital era, with almost every device and appliance being computerized. And it is here for even more as data science",
        user_id: 2

    },
    {
        title: "Smart(er) Devices ",
        post_content: "These smarter devices are here to stay in 2024 and even further, as data scientists are working on AI home robots, appliances, work devices, wearables, and so much more! ",
        user_id: 5
    },
    {
        title: "Datafication ",
        post_content: "Datafication is simply transforming everything in our lives into devices or software powered by data. So, in short, Datafication is the modification of human chores and tasks into data-driven technology. From our smartphones, industrial machines, and office applications",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;