const router = require('express').Router();
let LoanAccount = require('../models/loanAccount.model');

router.route('/').get((req, res) => {

    LoanAccount.find()
    .then(LoanAccount => res.json(LoanAccount))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const accountNumber = req.body.accountNumber;
    const userName = req.body.userName;
    const loanAmount = req.body.loanAmount;
    const interestPercenatge = req.body.interestPercenatge;
    const frequency = req.body.frequency
    const startDate = req.body.startDate;


    const newLoanAccount = new User({accountNumber, userName, loanAmount, interestPercenatge, frequency, startDate})

    newLoanAccount.save()
    .then(() => res.json('User Added! '))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;    