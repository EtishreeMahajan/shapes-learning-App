class EighthPage {
    constructor() {
        this.button43 = createButton('NEXT');
        this.input1 = createInput("CHOOSE YOUR OPTION");
        this.button48 = createButton('SUBMIT');
    }
    display() {
        this.button43.position(210, 560);
        this.button48.position(290, 560);
        this.input1.position(210, 520);

        this.button43.mousePressed(() => {
            if (gameState == 48) {
                gameState = 43;
            }
        });

        this.button48.mousePressed(() => {
            gameState = 48;
        })
    };

}