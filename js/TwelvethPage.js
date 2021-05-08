class TwelvethPage {
    constructor() {
        this.input5 = createInput("CHOOSE YOUR OPTION");
        this.button52 = createButton('SUBMIT');
    }
    display() {
        this.button52.position(290, 560);
        this.input5.position(210, 520);

        this.button52.mousePressed(() => {
            gameState = 52;
        })
    }
}