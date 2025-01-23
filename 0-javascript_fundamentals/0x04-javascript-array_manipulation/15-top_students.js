// TEST CASE
/*
const { assert } = require('chai');
const topStudents = require('../15-top_students');

describe('topStudents', () => {
    it('should filter a few students', () => {
        const expected = [{ name: 'David', grade: 90 }, { name: 'Daisy', grade: 100 }];
        const actual = topStudents([{ name: 'Darcie', grade: 80 }, { name: 'David', grade: 90 }, { name: 'Daisy', grade: 100 }]);
        console.log({expected, actual});
        assert.sameDeepMembers(expected, actual);
    });
    it('should filter many students', () => {
        const expected = [
            { name: 'David', grade: 90 }, 
            { name: 'Darcie', grade: 100 },
            { name: 'Percy', grade: 99 },
            { name: 'Steve', grade: 95 }
        ];
        const actual = topStudents([
            { name: 'Darcie', grade: 100 }, 
            { name: 'Daisy', grade: 80 }, 
            { name: 'David', grade: 90 },
            { name: 'Steve', grade: 95},
            { name: 'James', grade: 82 },
            { name: 'Percy', grade: 99 },
            { name: 'Luke', grade: 68 },
            { name: 'Kevin', grade: 72 }
        ]);
        console.log({expected, actual});
        assert.sameDeepMembers(expected, actual);
    });
});
*/

function topStudents(array) {
    return array.filter((student) =>
        student.grade >= 90);
}

module.exports = topStudents;
