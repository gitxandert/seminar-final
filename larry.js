let b_r;
let b_g;
let b_b;
let b_op;

let r=0;
let r_inc=3.14/120;

let x1;
let y1;
let w1;
let h1;

let sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8;
let f_r, f_g, f_b, f_op;
let s_r1, s_r2, s_r3, s_r4, s_r5, s_r6, s_r7, s_r8;
let s_g1, s_g2, s_g3, s_g4, s_g5, s_g6, s_g7, s_g8;
let s_b1, s_b2, s_b3, s_b4, s_b5, s_b6, s_b7, s_b8;
let s_op1, s_op2, s_op3, s_op4, s_op5, s_op6, s_op7, s_op8;

let x2;
let y2;
let w2;
let h2;

let x3;
let y3;
let w3;
let h3;

let x4;
let y4;
let w4;
let h4;

let x5;
let y5;
let w5;
let h5;

let x6;
let y6;
let w6;
let h6;

let x7;
let y7;
let w7;
let h7;

let x8;
let y8;
let w8;
let h8;

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  assignValues();
  background(b_r,b_g,b_b,b_op);
  Larry();
}

function assignValues(){
  if(out13==0){
    
    b_r=255;
    b_g=255;
    b_b=255;
    b_op=255;
    
    x1=width/2;
    y1=height/2;
    w1=50;
    h1=50;
    
    x2=width/2;
    y2=height/2+25;
    w2=0;
    h2=75;
    
    x3=width/2;
    y3=height/2+100;
    w3=25;
    h3=50;
    
    x4=width/2;
    y4=height/2+100;
    w4=-25;
    h4=50;
    
    x5=width/2;
    y5=height/2+40;
    w5=20;
    h5=20;
    
    x6=width/2+20;
    y6=height/2+60;
    w6=0;
    h6=30;
    
    x7=width/2;
    y7=height/2+40;
    w7=-25;
    h7=15;
    
    x8=width/2-25;
    y8=height/2+55;
    w8=-30;
    h8=0;
    
    f_r=255;
    f_g=255;
    f_b=255;
    f_op=255;
    
    sw1=4;
    s_r1=0;
    s_g1=0;
    s_b1=0;
    s_op1=255;
    
    sw2=4;
    s_r2=0;
    s_g2=0;
    s_b2=0;
    s_op2=255;
    
    sw3=4;
    s_r3=0;
    s_g3=0;
    s_b3=0;
    s_op3=255;

    sw4=4;
    s_r4=0;
    s_g4=0;
    s_b4=0;
    s_op4=255;
      
    sw5=4;
    s_r5=0;
    s_g5=0;
    s_b5=0;
    s_op5=255;
    
    sw6=4;
    s_r6=0;
    s_g6=0;
    s_b6=0;
    s_op6=255;
        
    sw7=4;
    s_r7=0;
    s_g7=0;
    s_b7=0;
    s_op7=255;
        
    sw8=4;
    s_r8=0;
    s_g8=0;
    s_b8=0;
    s_op8=255;
    
  }else{
    
    b_r=values[int(random(values.length-1))]*255;
    b_g=values[int(random(values.length-1))]*255;
    b_b=values[int(random(values.length-1))]*255;
    b_op=5;
    
    x1=values[int(random(values.length-1))]*width;
    y1=values[int(random(values.length-1))]*height;
    w1=values[int(random(values.length-1))]*width;
    h1=values[int(random(values.length-1))]*height;
    
    x2=values[int(random(values.length-1))]*width;
    y2=values[int(random(values.length-1))]*height;
    w2=values[int(random(values.length-1))]*width;
    h2=values[int(random(values.length-1))]*height;
    
    x3=values[int(random(values.length-1))]*width;
    y3=values[int(random(values.length-1))]*height;
    w3=values[int(random(values.length-1))]*width;
    h3=values[int(random(values.length-1))]*height;
    
    x4=values[int(random(values.length-1))]*width;
    y4=values[int(random(values.length-1))]*height;
    w4=values[int(random(values.length-1))]*width;
    h4=values[int(random(values.length-1))]*height;
    
    x5=values[int(random(values.length-1))]*width;
    y5=values[int(random(values.length-1))]*height;
    w5=values[int(random(values.length-1))]*width;
    h5=values[int(random(values.length-1))]*height;
    
    x6=values[int(random(values.length-1))]*width;
    y6=values[int(random(values.length-1))]*height;
    w6=values[int(random(values.length-1))]*width;
    h6=values[int(random(values.length-1))]*height;
    
    x7=values[int(random(values.length-1))]*width;
    y7=values[int(random(values.length-1))]*height;
    w7=values[int(random(values.length-1))]*width;
    h7=values[int(random(values.length-1))]*height;
    
    x8=values[int(random(values.length-1))]*width;
    y8=values[int(random(values.length-1))]*height;
    w8=values[int(random(values.length-1))]*width;
    h8=values[int(random(values.length-1))]*height;
    
    f_r=values[int(random(values.length-1))]*255;
    f_g=values[int(random(values.length-1))]*255;
    f_b=values[int(random(values.length-1))]*255;
    f_op=values[int(random(values.length-1))]*255;
    
    sw1=values[int(random(values.length-1))]*40;
    s_r1=values[int(random(values.length-1))]*255;
    s_g1=values[int(random(values.length-1))]*255;
    s_b1=values[int(random(values.length-1))]*255;
    s_op1=values[int(random(values.length-1))]*255;
    
    sw2=values[int(random(values.length-1))]*40;
    s_r2=values[int(random(values.length-1))]*255;
    s_g2=values[int(random(values.length-1))]*255;
    s_b2=values[int(random(values.length-1))]*255;
    s_op2=values[int(random(values.length-1))]*255;
    
    sw3=values[int(random(values.length-1))]*40;
    s_r3=values[int(random(values.length-1))]*255;
    s_g3=values[int(random(values.length-1))]*255;
    s_b3=values[int(random(values.length-1))]*255;
    s_op3=values[int(random(values.length-1))]*255;

    sw4=values[int(random(values.length-1))]*40;
    s_r4=values[int(random(values.length-1))]*255;
    s_g4=values[int(random(values.length-1))]*255;
    s_b4=values[int(random(values.length-1))]*255;
    s_op4=values[int(random(values.length-1))]*255;
      
    sw5=values[int(random(values.length-1))]*40;
    s_r5=values[int(random(values.length-1))]*255;
    s_g5=values[int(random(values.length-1))]*255;
    s_b5=values[int(random(values.length-1))]*255;
    s_op5=values[int(random(values.length-1))]*255;
    
    sw6=values[int(random(values.length-1))]*40;
    s_r6=values[int(random(values.length-1))]*255;
    s_g6=values[int(random(values.length-1))]*255;
    s_b6=values[int(random(values.length-1))]*255;
    s_op6=values[int(random(values.length-1))]*255;
        
    sw7=values[int(random(values.length-1))]*40;
    s_r7=values[int(random(values.length-1))]*255;
    s_g7=values[int(random(values.length-1))]*255;
    s_b7=values[int(random(values.length-1))]*255;
    s_op7=values[int(random(values.length-1))]*255;
        
    sw8=values[int(random(values.length-1))]*40;
    s_r8=values[int(random(values.length-1))]*255;
    s_g8=values[int(random(values.length-1))]*255;
    s_b8=values[int(random(values.length-1))]*255;
    s_op8=values[int(random(values.length-1))]*255;

    print(values);
    
  }
}

function Larry(){
  push();
  translate(x1, y1);
  strokeWeight(sw1);
  stroke(s_r1, s_g1, s_b1, s_op1);
  fill(f_r, f_g, f_b, f_op);
  ellipse(0,0, w1, h1);
  pop();
  push();
  translate(x2, y2);
  strokeWeight(sw2);
  stroke(s_r2, s_g2, s_b2, s_op2);
  line(0, 0, w2, h2);
  pop();
  push();
  translate(x3, y3);
  strokeWeight(sw3);
  stroke(s_r3, s_g3, s_b3, s_op3);
  line(0,0, w3, h3);
  pop();
  push();
  translate(x4, y4);
  strokeWeight(sw4);
  stroke(s_r4, s_g4, s_b4, s_op4);
  line(0,0, w4, h4);
  pop();
  push();
  translate(x5, y5);
  strokeWeight(sw5);
  stroke(s_r5, s_g5, s_b5, s_op5);
  line(0,0, w5, h5);
  pop();
  push();
  translate(x6, y6);
  strokeWeight(sw6);
  stroke(s_r6, s_g6, s_b6, s_op6);
  line(0,0, w6, h6);
  pop();
  push();
  translate(x7, y7);
  strokeWeight(sw7);
  stroke(s_r7, s_g7, s_b7, s_op7);
  line(0,0, w7, h7);
  pop();
  push();
  translate(x8, y8);
  rotate(r);
  strokeWeight(sw8);
  stroke(s_r8, s_g8, s_b8, s_op8);
  line(0,0, w8, h8);
  pop();
  r+=r_inc;
  if(r>PI/3 || r<0){
    r_inc=-r_inc;
  }
}