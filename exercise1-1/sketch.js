let reviews;

function preload(){
    reviews = loadStrings("assets/imdb_labelled.txt");
    positive = loadFont("assets/IrishGrover-Regular.ttf");
    negative = loadFont("assets/Creepster-Regular.ttf");
}

function setup(){
    createCanvas(400,400);
    //let reviews = "assets/imdb_labelled.txt"
    //let parts = split(reviews, "\t");
}

function draw(){
    background(0);
}

function keyPressed(){
    reviews[0];
    console.log(reviews[0]);
    if(key==='d'){
        //put code here
    }
}