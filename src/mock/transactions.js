const transactions = {
    '123': [
        {
            id: '1a',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '123**********666',
            amount: '200',
            date: '26/07/2020',
        },
        {
            id: '1b',
            type: 'Failure',
            cardType: 'Debit',
            cardDetails: '123**********666',
            amount: '800',
            date: '27/8/2020',
        },
        {
            id: '1c',
            type: 'Success',
            cardType: 'Credit',
            cardDetails: '224**********543',
            amount: '2000',
            date: '20/03/2021',
        },
        {
            id: '1d',
            type: 'Pending',
            cardType: 'Credit',
            cardDetails: '224**********543',
            amount: '1000',
            date: '23/03/2021',
        },
    ],
    '234': [
        {
            id: '2a',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '224********1112',
            amount: '200',
            date: '01/01/2020',
        },
        {
            id: '2b',
            type: 'Success',
            cardType: 'Credit',
            cardDetails: '224********1112',
            amount: '500',
            date: '01/01/2020',
        },
    ],
    '345': [
        {
            id: '3a',
            type: 'Failure',
            cardType: 'Credit',
            cardDetails: '224********1112',
            amount: '500',
            date: '01/01/2020',
        },
        {
            id: '3b',
            type: 'Pending',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '444',
            date: '02/5/1990',
        },
        {
            id: '3c',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '234*******567',
            amount: '555',
            date: '02/5/1990',
        },
        {
            id: '3d',
            type: 'Failure',
            cardType: 'Debit',
            cardDetails: '234*******156',
            amount: '345',
            date: '02/5/1990',
        },
        {
            id: '3e',
            type: 'Pending',
            cardType: 'Debit',
            cardDetails: '234*******1213',
            amount: '2,567',
            date: '02/5/1990',
        },
    ],
    '456': [
        {
            id: '4a',
            type: 'Success',
            cardType: 'Credit',
            cardDetails: '234*******123',
            amount: '444',
            date: '02/5/1990',
        },
    ],
    '567': [
        {
            id: '5a',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '444',
            date: '02/5/1990',
        },
        {
            id: '5b',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '234*******232',
            amount: '444',
            date: '02/5/1990',
        },
        {
            id: '5c',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '444',
            date: '02/5/1990',
        },
        {
            id: '5d',
            type: 'Success',
            cardType: 'Master',
            cardDetails: '234*******333',
            amount: '100',
            date: '02/5/1960',
        },
    ],
    '678': [
        {
            id: '6a',
            type: 'Success',
            cardType: 'Visa',
            cardDetails: '234*******666',
            amount: '600',
            date: '02/5/2000',
        },
        {
            id: '6b',
            type: 'Pending',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '333',
            date: '01/01/2000',
        },
    ],
    '789': [
        {
            id: '7a',
            type: 'Success',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '444',
            date: '02/05/1990',
        },
        {
            id: '7b',
            type: 'Failure',
            cardType: 'Debit',
            cardDetails: '234*******123',
            amount: '286',
            date: '02/05/1990',
        },
        {
            id: '7c',
            type: 'Pending',
            cardType: 'Credit',
            cardDetails: '234*******123',
            amount: '666',
            date: '02/05/1990',
        },
    ],
};

export default transactions;