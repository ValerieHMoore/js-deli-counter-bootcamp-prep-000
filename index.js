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
for (let i = 0; i < 25; i++) {
if(i)
    }
    var i = 1; 
    while (i < katzDeliLine.length) {
    newArray.push("The line is currently: " + [i] + ". " + katzDeliLine.shift())
    i++;
      }
return "The line is currently empty."
  }
  
function forLoop(array) {
for (let i = 0; i < 25; i++) {
if(i===1) {
    array.push("I am 1 strange loop.")
  } else {
    array.push("I am " + i + "strange loops.")
  }}
  return array
