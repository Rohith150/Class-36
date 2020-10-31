class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on('value', function(data){
            gameState = data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        text("Game Start", 120, 100);
        form.greeting.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            console.log("1")
            for(var plr in allPlayers){
                console.log("2")
                var playerPosition = 150;
                if(plr == "player" + player.index){
                    console.log("3")
                    playerPosition += 20
                    fill("red");
                    text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, playerPosition);
                }
            }
        }
    }
}