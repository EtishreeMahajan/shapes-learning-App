class TenthPage {
    constructor() {
        this.button45 = createButton('NEXT');
        this.input3 = createInput("CHOOSE YOUR OPTION");
        this.button50 = createButton('SUBMIT');
    }
    display() {
        this.button45.position(210, 560);
        this.button50.position(290, 560);
        this.input3.position(210, 520);

        this.button45.mousePressed(() => {
            if(gameState == 50){
            gameState = 45;
            }
        });

        this.button50.mousePressed(() => {
            gameState = 50;
        })
    }
}