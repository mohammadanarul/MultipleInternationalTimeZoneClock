let fns = require("date-fns");

const date = new Date()
const time = date.toLocaleString() 
const time1 = date.toLocaleString('en-US',{
  timeZone: 'EST',
}) 
const time2 = date.toLocaleString('bn',{
  timeZone: 'EST',
}) 

const convertBanglaToEnglishNumber=(str)=>{
  let banglaNumber= 
      {'০': 0,
      '১': 1,
      '২': 2,
      '৩': 3,
      '৪': 4,
      '৫': 5,
      '৬': 6,
      '৭': 7,
      '৮': 8,
      '৯': 9}
  for (var x in banglaNumber) {
      str = str.replace(new RegExp(x, 'g'), banglaNumber[x]);
  }
  return str;
}
console.log(time)
console.log(time1)
console.log(time2)
// console.log(Date.parse(time2))
// console.log(Date.parse(time1))
// console.log(time1.split('-'))
// console.log(Date.parse(time1))
// let d1= Date.parse(time2)
// let d = fns.format(d1, "hh:mm:ss a")
// console.log(d)