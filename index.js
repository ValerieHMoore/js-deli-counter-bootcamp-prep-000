 function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
 }
 function nowServing(katzDeliLine, name){
   while (katzDeliLine.length > 0) {
     return katzDeliLine.shift()
   }
 return "There is nobody waiting to be served!"
   }
function currentLine(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return katzDeliLine.shift()
  }
return "The line is currently empty."
  }