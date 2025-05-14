//The date object - this allows you to work with dates and times in javascript
//the date object is a built-in object in javascript that allows you to work with dates and times
//it provides methods for creating, manipulating, and formatting dates and times

//creating a Date object
//the date object can be created using the Date() constructor

const date = new Date();
console.log(date); // Current date and time in string format

//create a date object with a specific date and time
const date1 = new Date("2023-10-01T10:00:00");
console.log(date1); // Date object with specific date and time

//creating just with a date stq ring
const dateString = new Date("2023-10-01"); // Date object with specific date string
console.log(dateString); // Date object with specific date string

//creating date with individual date components
const dateComponents = new Date(2023, 0, 4, 11, 45, 33); // Year, Month (0-11), Day

//creating a date object with a specific date and time (with timezones)
const date2 = new Date("2023-10-01T10:00:00Z"); // UTC time
console.log(date2); // Date object with specific date and time in UTC

//creating a date with seconds since th e epoch 
const epochDate = new Date(0); // 0 seconds since the epoch (January 1, 1970)
console.log(epochDate); // Date object with epoch date

//creating a date with milliseconds since the epoch
const epochDate1 = new Date(1000); // 1000 milliseconds since the epoch (January 1, 1970)
console.log(epochDate1); // Date object with epoch date in milliseconds

//creating a specific date e.g 1st october 2023 with epoch time
const specificDate = new Date(156940800000); // 1st October 2023 in milliseconds since the epoch
console.log(specificDate); // Date object with specific date in milliseconds

//getting components of a date object
//date properties and methods in javascript
//.getMonth() - returns the month (0-11) of a date object
const month = date.getMonth(); // get the month of the date object
console.log(month); // Month (0-11) of the date object

//.getFullYear() - returns the year(4 digits) of a date object
const year = date.getFullYear(); // get the year of the date object
console.log(year); // Year (4 digits) of the date object

//.getDate() - returns the day of the month (1-31) of a date object
const day = date.getDate(); // get the day of the month of the date object
console.log(day); // Day of the month (1-31) of the date object

//.getDay() - returns the day of the week (0-6) of a date object
// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
const dayOfWeek = date.getDay(); // get the day of the week of the date object
console.log(dayOfWeek); // Day of the week (0-6) of the date object

//.getHours() - returns the hour (0-23) of a date object
const hours = date.getHours(); // get the hour of the date object
console.log(hours); // Hour (0-23) of the date object

//.getmilliseconds() - returns the milliseconds (0-999) of a date object
const milliseconds = date.getMilliseconds(); // get the milliseconds of the date object
console.log(milliseconds); // Milliseconds (0-999) of the date object

//.getSeconds() - returns the seconds (0-59) of a date object
const seconds = date.getSeconds(); // get the seconds of the date object
console.log(seconds); // Seconds (0-59) of the date object

//.getTime() - returns the number of milliseconds since the epoch (January 1, 1970) of a date object
const time = date.getTime(); // get the time of the date object
console.log(time); // Time (milliseconds since the epoch) of the date object

//setting components of a date object
const date3 = new Date(); // create a new date object
date3.setFullYear(2024); // set the year of the date object to 2024
date3.setMonth(11); // set the month of the date object to December (11)
date3.setDate(25); // set the day of the date object to 25th
date3.setHours(10); // set the hour of the date object to 10 AM
date3.setMinutes(45); // set the minutes of the date object to 45
date3.setSeconds(30); // set the seconds of the date object to 30
date3.setMilliseconds(500); // set the milliseconds of the date object to 500
console.log(date3);

//date formatting
//The date object can be formatted using the toLocaleDateString() method
const dateString1 = date.toString(); // convert the date object to a string
console.log(dateString1); // Date object in string format

//.toDAteString() - returns the date portion of a date object as a string
const dateString2 = date.toDateString(); // convert the date object to a date string
console.log(dateString2); // Date object in date string format


//.toTimeString() - returns the time portion of a date object as a string
const timeString = date.toTimeString(); // convert the date object to a time string
console.log(timeString); // Date object in time string format

//.toISOString() - returns the date object as a string in ISO format
const isoString = date.toISOString(); // convert the date object to an ISO string
console.log(isoString); // Date object in ISO string format


//.toUTCString() - returns the date object as a string in UTC format
const utcString = date.toUTCString(); // convert the date object to a UTC string
console.log(utcString); // Date object in UTC string format

//.toLocalString() - returns the date object as a string in local format
const localString = date.toLocaleString(); // convert the date object to a local string
console.log(localString); // Date object in local string format

//.toLocaleDateString() - returns the date object as a string in local date format
const localDateString = date.toLocaleDateString(); // convert the date object to a local date string
console.log(localDateString); // Date object in local date string format

//.toLocaleTimeString() - returns the date object as a string in local time format
const localTimeString = date.toLocaleTimeString(); // convert the date object to a local time string
console.log(localTimeString); // Date object in local time string format

const options = {
    weekday : "long",
    year : "numeric",
    month : "long",
    day : "numeric",
    hour : "2-digit",
    minute : "2-digit",
    second : "2-digit",

}
const formattedDate = date.toLocaleDateString("en-US", options); // convert the date object to a formatted date string
console.log(formattedDate); // Date object in formatted date string format

//date arithmetic
//you can perform arithmetic operatons on date objects using the getTime() method.
// Adding days to a date object
const daysToAdd = 5; // number of days to add
const newDate = new Date(date.getTime() + daysToAdd * 24 * 60 * 60 * 1000); // add days to the date object
console.log(newDate); // Date object with added days

//Subtracting days from a date object
const daysToSubtract = 3; // number of days to subtract
const newDate1 = new Date(date.getTime() - daysToSubtract * 24 * 60 * 60 * 1000); // subtract days from the date object
console.log(newDate1); // Date object with subtracted days

//getting the difference between two date objects
const date4 = new Date("2023-10-01"); // create a new date object
const date5 = new Date("2023-10-10"); // create a new date object
const difference = date5.getTime() - date4.getTime(); // get the difference between two date objects in milliseconds
const daysDifference = difference / (1000 * 60 * 60 * 24); // convert milliseconds to days
console.log(daysDifference); // Difference between two date objects in days


const difference1 = date5.getFullYear() - date4.getFullYear(); // get the difference between two date objects in milliseconds
const daysDifference1 = difference1 / (1000 * 60 * 60 * 24); // convert milliseconds to days


