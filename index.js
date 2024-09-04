const display =document.getElementById("display");
function appendToDisplay(input)
{
    display.value+=input;

}
function Caculate()
{
    try{
   display.value= eval(display.value);
    }
    catch(error){
        display.value= "error";
    }
}

function Clear()
{
    display.value="";
}