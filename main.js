canvas = document.getElementById("myCanvas");
canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e)
{
   color= document.getElementById("color").value;
   width_of_line= document.getElementById("width_of_line").value;
   radius= document.getElementById("radius").value;

   mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
  mouseEvent="mouseleave";
}
canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e)
{
  mouseEvent="mouseUp";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;

    if ( mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.linewidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);

        console.log("last position of x and y coordinates = ");
        console.log("x ="+ last_position_of_x +"y ="+ last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);
        
        console.log("current position of x and y coordinates = ");
        console.log("x ="+ current_position_of_x +"y =" +current_position_of_y);
        ctx.lineto(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }

     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
     
}
