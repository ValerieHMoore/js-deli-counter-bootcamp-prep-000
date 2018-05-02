 function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
  return katzDeliLine.length
 }
 function nowServing(katzDeliLine, name){
   while (katzDeliLine.length > 0) {
     return katzDeliLine.shift()
   }
 return "There is nobody waiting to be served!"
   
 }