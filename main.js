canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png"
car2_x=10;
car2_y=10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src=background_image;

}

function uploadbackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }