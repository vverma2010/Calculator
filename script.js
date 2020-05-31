// function c(val) used to clear display
function c(val) 
{
document.getElementById("d").value=val;
}
// Function v(val) is used for typing numbers as well as mathematical operators.
function v(val)
{
document.getElementById("d").value+=val;
}
// Function e() is used for evaluating
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  