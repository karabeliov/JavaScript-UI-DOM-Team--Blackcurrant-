(function StartGame() {
    var transferred = 0,
        sail = 0,
        conflict;  // conflict = all.onShore && criminalMan.onShore || boys.onShore && mother.onShore || girls.onShore && father.onShore;

    /*
        Conflict:
        criminalMan 	-		with any one unless the cop is with him
        girls		    -		with father unless the mother is with them
        boys		    -		with mother unless the father is with them
    */
    var Person = {
        onShore: true
    };

    // Protector
    var cop = (function (parent) {
        var cop = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });

        return cop;
    }(Person));

    var father = (function (parent) {
        var father = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });

        return father;
    }(Person));

    var mother = (function (parent) {
        var mother = Object.defineProperties(parent, {
            protector: {
                value: true
            }
        });

        return mother;
    }(Person));

    while (true) {
        if (transferred == 8) {
            console.log('You Win! Your sail is ' + sail); // Change with Winer Screen
            break;
        }

        if (true) { // timeUp == 10 min
            console.log('You Lose! Try again'); 
            break;
        }

        function sailing(Person) { // one or two person
            if (false) { // is children
                console.log('Children can not go alone!');
            } else if (conflict) {
                if (Person.protector) { 
                    console.log('The Raft is GO '); // raft is go to other side
                    sail++;
                    transferred += arguments.length;  // one or two
                    transferred -= arguments.length;  // when is coming back one or two
                } else {
                    console.log('Have a conflict! '); // what is the conflict
                }
            } else {
                console.log('The Raft is GO '); // raft is go to other side
                sail++;
                transferred += arguments.length;  // one or two
                transferred -= arguments.length;  // when is coming back one or two
            }
        }
    }
}());