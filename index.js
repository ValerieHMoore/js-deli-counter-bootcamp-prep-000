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
    var i = 0 
    while (i < katzDeliLine.length) {
    return ("The line is currently: " + [i++] + ". " + katzDeliLine.shift())
  }
return "The line is currently empty."
  }