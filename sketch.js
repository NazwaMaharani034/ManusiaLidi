let j;
let speed = 2;
function setup () {
    createCanvas(400,400);
    x = 180;
    y = 205;
    j = 0;
}
function draw(){
    background(220,0,200);
    ellipse(130,150,75,75); //kepala lidi 1
    strokeWeight(5);
    line(130,190,130,300); //badan lidi 1
    //gerakin tangan
    
    var x = 180 + 15*Math.sin(PI/15*j)
    j+=1
    
    line(130,230,x,195);
    line(130,230,85,195);


    ellipse(250,150,75,75); //kepala lidi 2
    line(250,190,250,300); //badan lidi 2
    
    var y = 205 + 15*Math.sin(PI/15*j)
    j+=1
    line(250,230,300,195);
    line(250,230,y,195);
}