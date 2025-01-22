// TEST CASE
/*
const { assert } = require('chai');
const sortByMonth = require('../5-sort_by_month');

describe('sortByMonth', () => {
    it('should fix the sort order for three events', () => {
        let actual = [
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'parade', month: 'JAN' },
        ];
        sortByMonth(actual);
        const expected = [
            { event: 'parade', month: 'JAN' },
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should fix the sort order for many events', () => {
        let actual = [
            { event: 'haunted hayride', month: 'OCT' },
            { event: 'holiday party', month: 'DEC' },
            { event: 'picnic', month: 'SEP' },
            { event: 'dance', month: 'MAR' },
            { event: 'snowball fight', month: 'FEB' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'parade', month: 'JAN' },
        ];
        sortByMonth(actual);
        const expected = [
            { event: 'parade', month: 'JAN' },
            { event: 'snowball fight', month: 'FEB' },
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'picnic', month: 'SEP' },
            { event: 'haunted hayride', month: 'OCT' },
            { event: 'holiday party', month: 'DEC' },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});
*/

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a, b) => {
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });
}

module.exports = sortByMonth;
