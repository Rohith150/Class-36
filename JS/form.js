class Form{
    constructor(){
        this.title = createElement('h2', 'Car Racing Game');
        this.title.position(400, 50);
        this.input = createInput();
        this.input.position(400,150);
        this.button = createButton('Play');
        this.button.position(450,200);
    }

    display(){
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting = createElement('h2');
            this.greeting.html("Hello " + player.name);
            this.greeting.position(400,150);

        });
    }
}