// Task 1
const num = -8;

if (num > 0) {
  console.log(`${num} is greater thn 0`);
} else if (num < 0) {
  console.log(`${num} is less than 0`);
} else {
  console.log(`Number is equal to 0`);
}

// Task 2
const age = 18;
if (age >= 18) {
  console.log(`Person is eligible to vote`);
} else {
  console.log(`Person is not eligible to vote`);
}

// Task 3
const num1 = 15;
const num2 = 20;
const num3 = 18;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is graeter`);
  } else {
    console.log(`${num3} is greater`);
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log(`${num2} is greater`);
  } else {
    console.log(`${num3} is greater`);
  }
}

// Task 4
const weekDay = 1;

switch (weekDay) {
  case 1:
    console.log(`Day is Sunday`);
    break;
  case 2:
    console.log(`Day is Monday`);
    break;
  case 3:
    console.log(`Day is Tuesday`);
    break;
  case 4:
    console.log(`Day is Wednesday`);
    break;
  case 5:
    console.log(`Day is Thursday`);
    break;
  case 6:
    console.log(`Day is Friday`);
    break;
  case 7:
    console.log(`Day is Staurday`);
    break;
  default:
    console.log(`Please enter valid input`);
    break;
}

// Task 5
const score = 85;

switch (true) {
  case score >= 90 && score <= 100:
    console.log(`Grade is "A"`);
    break;
  case score >= 80 && score < 90:
    console.log(`Grade is "B"`);
    break;
  case score >= 70 && score < 80:
    console.log(`Grade is "C"`);
    break;
  case score >= 60 && score < 70:
    console.log(`Grade is "D"`);
    break;
  case score >= 0 && score < 60:
    console.log(`Grade is "F"`);
    break;
  default:
    console.log(`Please enter valid input`);
    break;
}

// Task 6
const number = 21;
const ans = number % 2 == 0 ? "even" : "odd";
console.log(`Number is ${ans}`);

// Task 7
const year = 2024;

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

if (isLeapYear(year)) {
  console.log(`${year} is Leap Year`);
} else {
  console.log(`${year} is not Leap Year`);
}
