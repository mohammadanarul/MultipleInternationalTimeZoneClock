const fns = require("date-fns");

const getTime = (datetime) => {
  const timeParse = Date.parse(datetime);
  const amPM = fns.format(timeParse, "a");
  const hours = parseInt(fns.format(timeParse, "hh"));
  const minuts = parseInt(fns.format(timeParse, "mm"));
  const seconds = parseInt(fns.format(timeParse, "ss"));
  const day = parseInt(fns.format(timeParse, "dd"));
  const year = parseInt(fns.format(timeParse, "yyyy"));
  const month = parseInt(fns.format(timeParse, "MM"));
  return {
    year,
    month,
    day,
  };
};

const { year, month, day, hours, minuts, seconds } = getTime(new Date());
const {
  year: myYear,
  myMonth,
  myDay,
  myHours,
  myMinuts,
  mySeconds,
} = getTime(new Date());

console.log(year);
console.log(myYear);
