export const getMonthNameAndYear = (date) => {
  const d = new Date(date);
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let hour = d.getHours();
  let minute = d.getMinutes();
  let dayIndex = d.getDay();
  if (String(day).length === 1) {
    day = "0" + String(day);
  }
  if (String(d.getMonth() + 1).length === 1) {
    month = "0" + String(d.getMonth() + 1);
  }
  const dateTime = {
    month: monthNames[d.getMonth()],
    monthDecimal: month,
    year: d.getFullYear(),
    day,
    dayName: weekName[dayIndex],
    dayIndex,
    hour,
    minute,
  };
  return dateTime;
};
export const monthNames = [
  {
    name: "January",
    shortName: "Jan",
  },
  {
    name: "February",
    shortName: "Feb",
  },
  {
    name: "March",
    shortName: "Mar",
  },
  {
    name: "April",
    shortName: "Apr",
  },
  {
    name: "May",
    shortName: "May",
  },
  {
    name: "June",
    shortName: "Jun",
  },
  {
    name: "July",
    shortName: "Jul",
  },
  {
    name: "August",
    shortName: "Aug",
  },
  {
    name: "September",
    shortName: "Sep",
  },
  {
    name: "October",
    shortName: "Oct",
  },
  {
    name: "November",
    shortName: "Nov",
  },
  {
    name: "December",
    shortName: "Dec",
  },
];
export const weekName = [
  {
    name: "Sunday",
    shortName: "Sun",
    selected: false,
  },
  {
    name: "Monday",
    shortName: "Mon",
    selected: false,
  },
  {
    name: "Tuesday",
    shortName: "Tu",
    selected: false,
  },
  {
    name: "Wednesday",
    shortName: "Wed",
    selected: false,
  },
  {
    name: "Thursday",
    shortName: "Thu",
    selected: false,
  },
  {
    name: "Friday",
    shortName: "Fri",
    selected: false,
  },
  {
    name: "Saturday",
    shortName: "Sat",
    selected: false,
  },
];
