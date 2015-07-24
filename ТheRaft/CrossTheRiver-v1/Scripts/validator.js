var Validator = (function () {
    'use strict';

    function Validator(c, r) {
        this.characters = c;
        this.raft = r;
    }
    Validator.prototype.validateMove = function (people) { // array for side1 and side2
        var isPoliceman = false;
            isPrisoner = false;
            isFather = false;
            isSon = false;
            isMother = false;
            isDaughter = false;

        var person, len;
        for (person = 0, len = people.length; person < len; person += 1) {
            var currPerson = people[person].role;

            switch (currPerson) {
                case policeman:
                    isPoliceman = true;
                    break;
                case prisoner:
                    isPrisoner = true;
                    break;
                case father:
                    isFather = true;
                    break;
                case mother:
                    isMother = true;
                    break;
                case son:
                    isSon = true;
                    break;
                case daughter:
                    isDaughter = true;
                    break;
                default:
                    'not a hero in this game';
            }
        }

        var isPrisoner_NonPoliceman = (isPrisoner && (isFather || isMother || isDaughter || isSon)),
            isPrisonerRuleViolated = (!(isPoliceman && isPrisoner) && isPrisoner_NonPoliceman),
            isDaughterRuleViolated = ((isFather && isDaughter) && !isMother),
            isSonRuleViolated = ((isMother && isSon) && !isFather),

            AreAllRulesObeyed = !(isPrisonerRuleViolated && isDaughterRuleViolated && isSonRuleViolated);

        return AreAllRulesObeyed;

        //Check is the side the raft is on is valid
    };

    Validator.prototype.travel = function (passed) { // pilot and passenger at raft
        var side1 = assets.characters,   // array with all people
            side2 = [],
            passedPerson = side1.indexOf(passed);

        if (passedPerson > -1) { // remove person from side 1
            side1.splice(passedPerson, 1);
        }

        side2.push(passed); // add person to side 2
    };

    return Validator;
})();