(function StartGame() {
    var sail = 0,
        rightSide = [],
        conflict;  // conflict = all.onShore && prisoner.onShore || sons.onShore && mother.onShore || daughters.onShore && father.onShore;

    //  Conflict:
    //  prisoner 	-		with any one unless the cop is with him
    //  daughters		    -		with father unless the mother is with them
    //  sons		    -		with mother unless the father is with them

    var Raft = (function (parent) {
        var raft = Object.defineProperties(parent, {
            side: {
                value: left
            },
            speed: {    // example
                value: 100
            }
        });
        return raft;
    }());

    var Person = {
        onShore: true
    }

    // Protector
    var Cop = (function (parent) {
        var cop = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });
        return cop;
    }(Person));

    var Father = (function (parent) {
        var father = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });
        return father;
    }(Person));

    var Mother = (function (parent) {
        var mother = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });
        return mother;
    }(Person));


    // Other people
    var Prisoner = (function (parent) {
        var prisoner = Object.defineProperties(parent, {

        });
        return prisoner;
    }(Person));

    var Children = (function (parent) {
        var children = Object.defineProperties(parent, {
            
        });
        return children;
    }(Person));

    var Son = (function (parent) {
        var son = Object.defineProperties(parent, {

        });
        return son;
    }(Children));

    var Daughter = (function (parent) {
        var daughter = Object.defineProperties(parent, {

        });
        return daughter;
    }(Children));

    while (true) {
        if (rightSide.length == 8) {
            console.log('You Win! Your sail is ' + sail); // Change with Winer Screen
            break;
        }

        if (true) { // timeUp == 10 min
            console.log('You Lose! Try again'); 
            break;
        }

        function sailing(people) { // one or two person
            if (people instanceof Children) { // is children
                console.log('Children can not go alone!');
            }
            else if (conflict) {
                if (people.protector) {
                    console.log('The Raft is GO '); // raft is go to other side
                    sail++;

                    if (Raft.side == 'left') {
                        rightSide.push(arguments.length); // one or two
                    }
                    else {
                        rightSide.pop(arguments.length);  // when is coming back one or two
                        Raft.side = 'right'
                    }            
                } else {
                    console.log('Have a conflict! '); // what is the conflict
                }
            } else {
                console.log('The Raft is GO '); // raft is go to other side
                sail++;

                if (Raft.side == 'left') {
                    rightSide.push(arguments.length); // one or two
                }
                else {
                    rightSide.pop(arguments.length);  // when is coming back one or two
                    Raft.side = 'right'
                }
            }
        }
    }
}())