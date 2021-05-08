class NinethPage {
    constructor() {
        this.button44 = createButton('NEXT');
        this.input2 = createInput("CHOOSE YOUR OPTION");
        this.button49 = createButton('SUBMIT');
    }
    display() {
        this.button44.position(210, 560);
        this.button49.position(290, 560);
        this.input2.position(210, 520);

        this.button44.mousePressed(() => {
            if(gameState == 49){
            gameState = 44;
            }
        });

        this.button49.mousePressed(() => {
            gameState = 49;
        })
    }
}