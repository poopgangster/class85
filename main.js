canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
nasa_array=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg"];
random_number=Math.floor(Math.random()*5);
//background_image="mars.jpg";
background_image=nasa_array[random_number];
rover_image="rover.png";
function add(){
background_imagetag=new Image();
background_imagetag.src=background_image;
background_imagetag.onload=uploadbackground;
rover_imagetag=new Image();
rover_imagetag.src=rover_image;
rover_imagetag.onload=uploadrover;
}
function uploadbackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
    }
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=="38"){
up();
console.log("up key is pressed");
}
if(keypressed=="40"){
    down();
    console.log("down key is pressed");
    }
    if(keypressed=="37"){
        left();
        console.log("left key is pressed");
        }
        if(keypressed=="39"){
            right();
            console.log("right key is pressed");
            }
}
function up(){
if(rover_y>0){
rover_y=rover_y-10;
console.log("rover_x="+rover_x+" rover_y="+rover_y);
uploadbackground();
uploadrover(); 
}    
}
function down(){
    if(rover_y<500){
    rover_y=rover_y+10;
    console.log("rover_x="+rover_x+" rover_y="+rover_y);
    uploadbackground();
    uploadrover(); 
    }    
    }
    function left(){
        if(rover_x>0){
        rover_x=rover_x-10;
        console.log("rover_x="+rover_x+" rover_y="+rover_y);
        uploadbackground();
        uploadrover(); 
        }    
        }
        function right(){
            if(rover_x<700){
            rover_x=rover_x+10;
            console.log("rover_x="+rover_x+" rover_y="+rover_y);
            uploadbackground();
            uploadrover(); 
            }    
            }