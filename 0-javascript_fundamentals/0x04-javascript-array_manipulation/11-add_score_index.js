// TEST CASE
/*
const addScore = require('../11-add_score_index');
const { assert } = require('chai');

describe('addScore', () => {
    it('should add 10 to the score for a single participant', () => {
        const actual = addScore([{ id: 1, score: 5 }]);
        const expected = [{ id: 1, score: 15 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should add 10 to the score for the first 3 participants', () => {
        const actual = addScore([{ id: 1, score: 5 }, { id: 3, score: 10 }, { id: 2, score: 15 }, { id: 0, score: 2 }, { id: 5, score: 4 }]);
        const expected = [{ id: 1, score: 15 }, { id: 3, score: 20 }, { id: 2, score: 25 }, { id: 0, score: 2 }, { id: 5, score: 4 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});
*/

function addScore(players) {
    return players.map((player, i) => {
        if (i < 3) {
            player.score += 10;
        }

        return player;
    });
}

module.exports = addScore;
