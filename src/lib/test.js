let fns = require('date-fns')

let timf = fns.format(new Date())
//=> "Today is a Tuesday"
console.log(fns.isToday(timf))

const dt = fns.formatDistance(
    new Date(1986, 3, 4, 11, 32, 0),
    new Date(1986, 3, 4, 10, 32, 0),
    { addSuffix: true }
  ) //=> 'in about 1 hour'
//=> "3 days ago"
console.log(dt)
