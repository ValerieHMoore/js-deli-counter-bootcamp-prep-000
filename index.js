function takeANumber(katzDeliLine, name) {
 var katzDeli = [];
 for (let i = 0; i < katzDeliLine.length; i++){
   katzDeli.push(katzDeliLine[i] + name[i])
 }
 return katzDeli
}