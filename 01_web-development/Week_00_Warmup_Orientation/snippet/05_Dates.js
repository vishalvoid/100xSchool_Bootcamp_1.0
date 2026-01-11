// It's not a primitive. it's like a class that is being given for us globally.

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  // we do it with the help of epoc timestamp.
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

const date = new Date();

// Interesting things.

//////////////////////////////////////////////////////
console.log(date.getYear());
// will return something in stringer usually return an string for some date -1900. as building this documents. it is returning 125. means the current year wouled be 125 + 1900 that is 2025. which is current

////////////////////////////////////////////////////
// how to calculate how much time my funciton took to run

function calcualteSum() {
  let a = 0;
  for (let i = 0; i < 100000000; i++) {
    a = a + 1;
  }
  return a;
}

const beforetiem = new Date();
const beforeTimeinMs = beforetiem.getTime();

// calling sum
calcualteSum();

const aftertime = new Date();
const aftertimeinMs = aftertime.getTime();

console.log(aftertimeinMs - beforeTimeinMs);
// here it says it took 67 milliseconds to calcualte this.
