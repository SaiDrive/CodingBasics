const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanAccountSchema = new Schema({

    accountNumber: {
        type: String,
        unique: true,
        required: true
    },
    userName: {
        type : String,
        required: true,
    },
    loanAmount: {
        type: Number,
        required: true,
        minlenght: 3
    },
    interestPercenatge: {
        type: Number,
        required: true,
        minlenght: 1
    },
    frequency: {
        type: String,
        required: true,
        minlenght: 5
    },
    startDate: {
        type: Date,
        required: true
    }
},
{ timestamps: true,
});

const LoanAccount = mongoose.model('LoanAccount', loanAccountSchema);

module.exports = LoanAccount;