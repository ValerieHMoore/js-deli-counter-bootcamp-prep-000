function takeANumber(katzDeliLine, name) {
 var katzDeli = []
 for (let i = 0; i < katzDeliLine.length; i++){
   katzDeli.push("Welcome, " + name[i] + ". You are number " + katzDeliLine[i+1] "in line.")
 }
 return katzDeli
}