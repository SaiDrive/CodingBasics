const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {

    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const userName = req.body.userName;
    const phoneNumber = req.body.phoneNumber;

    const newUser = new User({userName, phoneNumber})

    newUser.save()
    .then(() => res.json('User Added! '))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;    