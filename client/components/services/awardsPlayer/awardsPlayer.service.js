'use strict';

angular.module('abroadathletesApp')
    .factory('AwardsPlayer', function () {
        var awards_array = {
            'awards football': [
                'Team captain',
                'All-American',
                'All-Conference (1st team) (2nd team) (Honorable Mention)']
        };

        awards_array.football = awards_array['awards football']; //temporary hack for creator football name

        return {
            getAwards: function (awards) {
                awards = awards || '';
                return _.get(awards_array, awards.toLowerCase(), []);
            }
        }
    });
