const { User } = require('../models');

const userData = [
    {
        username: "chuks_iz",
        twitter: "chuks_iz",
        email: "chuksiz@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "darian_go",
        twitter: "darian_go",
        email: "dariango@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "kobe_br",
        twitter: "kobebr_",
        email: "kobebr@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lionel_me",
        twitter: "lionel_me",
        email: "lionel_messi@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "chioma_iz",
        twitter: "chioma",
        email: "chiomaizamojee@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "giannis",
        twitter: "giannis_a",
        email: "gia.nnis@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;