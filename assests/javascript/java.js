// only the 4 buttons at the top is showing when i press 1 button the other 3 show in the middle section

var characters = [{
        name: "DarthVader",
        health: 120,
        attack: 8,
        enemyattackback: 15,
        imgURL: "assests/images/darth_vader.jpg"
    },

    {
        name: "StormTrooper",
        health: 100,
        attack: 14,
        enemyattackback: 5,
        imgURL: "assests/images/stormtrooper.jpg"
    },

    {
        name: "LukeSkywalker",
        health: 150,
        attack: 8,
        enemyattackback: 20,
        imgURL: "assests/images/Luke_Skywalker.jpg"

    },

    {
        name: "Yoda",
        health: 180,
        attack: 7,
        enemyattackback: 25,
        imgURL: "assests/images/yoda.jpg"
    }
];
var selectedCharacter;
var enemy;
var fighter;
var gamestart = false
var chooseopp = false
var Vaderattack = characters[0].attack;
var stormtrooperattack = characters[1].attack;
var Lukeattack = characters[2].attack;
var yoda = characters[3].attack;
var turncounter = 1;
var currentPlayer;

console.log();
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);

// start the game with a loop that sends the 4 character in the object to a div
$(document).ready(function() {

    function startgame() {
        $.each(characters, function(index, character) {
            var characterDiv = $('<div>').addClass('character');
            var characterName = $('<p>').addClass("character-name").text(character.name);
            var characterImg = $("<img>").addClass("character-img").attr('src',
                character.imgURL);;
            var characterHealth = $('<p>').addClass('character-health').text(character.health);
            var characterAttack = $('<p>').addClass('character-attack').text(character.attack).hide();
            var characterCounter = $('<p>').addClass('character-counter').text(character.enemyattackback).hide();
            characterDiv.append(characterName, characterImg, characterHealth, characterAttack, characterCounter).appendTo('.Character')
        })




        $('.character').one("click", function() {
            $(this).addClass('.player-selected').appendTo('.player');
            $('.Character').children()
                .off('click')
                .addClass("enemy")
                .on('click', newEnemySelected);

        })

        function newEnemySelected() {
            $(this).addClass("selected").appendTo('.fighter');
            $('.Character').children().off("click").hide();
            $('.btn').on("click", attack);
            $('.statements h2').empty();

            //move the selected enemy to defender div
            //turn off or disable other enemies
            //enable the attack button to handle logic 
        }

        function attack() {
            var currentPlayer = $('.player').find('.character-name').text();
            //console.log(currentPlayer)
            var currentPlayerAttack = $('.player').find('.character-attack').text();
            //console.log(currentPlayerAttack)
            var currentPlayerHealth = $('.player').find('.character-health').text();
            //console.log(currentPlayerHealth)
            var attackMessage = currentPlayer + " Attacked " + (currentPlayerAttack) + " damage ";
            // console.log(attackMessage)

            var currentEnemy = $('.fighter').find('.character-name').text();
            //console.log(currentEnemy)
            var currentEnemycounter = $('.fighter').find('.character-counter').text();
            //console.log(currentEnemycounter)
            var currentEnemyHealth = $('.fighter').find('.character-health').text();
            //console.log(currentEnemyHealth)
            var enemyCounterMessage = currentEnemy + " Counter attacks by " + currentEnemycounter;
            //console.log(enemyCounterMessage)
            var increment = (currentPlayerAttack + currentPlayerAttack);

            console.log(increment)

            // var currentPlayerMessage = $('<div>').addClass('currentPlayer');
            //currentPlayerMessage.append(attackMessage).appendTo('#fight')

            //var currentEnemyMessage = $('<div>').addClass('currentEnemy');
            //currentEnemyMessage.append(enemyCounterMessage).appendTo('#fight');
            //var playerHealth;


            characterHealth = currentPlayerHealth - currentEnemycounter;

            $('.player').find('.character-health').text(characterHealth);

            enemyHealth = currentEnemyHealth - currentPlayerAttack;
            $('.fighter').find('.character-health').text(enemyHealth);


            if (characterHealth <= 0) {
                $('.player').html(" YOU ARE DEAD");
            }
            if (enemyHealth <= 0) {
                $('.selected').remove();
                $('.statements h2').html("PICK A NEW ENEMY");
                $('.Character').children()
                    .show()
                    .on("click", newEnemySelected);







            }


        }



        // check char. for his health
        //


    };







    startgame()

});
