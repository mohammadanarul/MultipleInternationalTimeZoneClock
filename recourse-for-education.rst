###Timezone learning resourse
1. https://stackoverflow.com/tags/timezone/info
2. https://stackoverflow.com/tags/dst/info
3. https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone/15171030#15171030
4. https://stackoverflow.com/questions/13854105/convert-javascript-date-object-to-pst-time-zone
5. https://stackoverflow.com/questions/66068149/receive-a-string-and-verify-if-it-is-a-valid-date-with-date-fns
6. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
7. https://www.plus2net.com/javascript_tutorial/clock-time-zones-list.php

  const [time, setTime] = useState(new Date());
  const [utctime, setUTCTime] = useState(new Date());

  const parseTime = format(utctime, "hh:mm:ss");
  const myDay = utctime.getTimezoneOffset();

  const date = time.toLocaleString("en-US", {
    timeZone: "America/New_York",
    timeZoneName: "long",
  });
  const ustTime = time.toLocaleString("en-US", {
    timeZone: "UTC",
    timeZoneName: "short",
  });
  const pstTime = time.toLocaleString("en-US", {
    timeZone: "PST",
    timeZoneName: "long",
  });