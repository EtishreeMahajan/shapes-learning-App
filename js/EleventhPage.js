class EleventhPage {
    constructor() {
        this.button46 = createButton('NEXT');
        this.input4 = createInput("CHOOSE YOUR OPTION");
        this.button51 = createButton('SUBMIT');
    }
    display() {
        this.button46.position(210, 560);
        this.button51.position(290, 560);
        this.input4.position(210, 520);

        this.button46.mousePressed(() => {
            if(gameState == 51){
            gameState = 46;
            }
        });

        this.button51.mousePressed(() => {
            gameState = 51;
        })
    }
}