 function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
 }
 function nowServing(katzDeliLine, name){
   while (katzDeliLine.length > 0) {
     return ("Currently serving " + katzDeliLine.shift() + ".")
   }
 return "There is nobody waiting to be served!"
   }
function currentLine(katzDeliLine) {
    var newArray = [];
    var i = 1;
    while (i < katzDeliLine.length) {
    newArray.push("The line is currently: " + [i] + ". " + katzDeliLine.shift())
    i++;
  return newArray
    }
  return "The line is currently empty."
  }

var n = 0;
while (n < 3) {
  n++;
}