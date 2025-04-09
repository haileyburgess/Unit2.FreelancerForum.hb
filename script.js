// STATE -- Defining Variables and Default/Initial Values and Functions to Modify Initial State
// I want to define name, price, and occupation separately so that I can generate random freelancers in a function later on
const NAMES = [
  "Brooke",
  "Emily",
  "Miguel",
  "David",
  "Megan",
  "Hailey",
  "Margaret",
];
const PRICES = [90, 70, 65, 60, 80, 100];
const OCCUPATIONS = [
  "Marketing",
  "Analyst",
  "Architect",
  "Quant",
  "Developer",
  "Product",
  "Copywriter",
];

const MAXLIST = 20;
const FREELANCERS = [
  // defines the 2 default freelancer values
  {
    name: "Brooke",
    price: "70",
    occupation: "Marketing",
  },
  {
    name: "Emily",
    price: 65,
    occupation: "Analyst",
  },
];

// Add Freelancer with random properties for all three elements: name, price, occupation

function addFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const price = PRICES[Math.floor(Math.random() * PRICES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  FREELANCERS.push({ name, price, occupation });
}

// average should calculate the length of prices * sum of prices, divided by length of prices array
function sumPrices(PRICES) {
  let sum = 0;
  for (let i = 0; i < PRICES.length; i++) {
    sum += PRICES[i];
  }
  return sum;
}

// Somewhere here I need to pass in the current freelancers array to calculate the average based on the updated array (updated every 2 seconds)
function updateAverage() {
  const PRICES = FREELANCERS.map(freelancer => freelancer.price);
  const totalSum = sumPrices(PRICES);
  const AVERAGE = totalSum / FREELANCERS.length;

  const averageCalc = document.querySelector("#average");
  averageCalc.textContent = `Average Price: $${AVERAGE}`;
  return averageCalc;
}

// Render the DOM to reflect the current state
function render() {
  const freelancerList = document.querySelector("#freelancers");
  const listElements = FREELANCERS.map((freelancer) => {
    const listElement = document.createElement("li");
    listElement.textContent = `${freelancer.name} - $${freelancer.price} - ${freelancer.occupation}`;
    return listElement;
  });
  freelancerList.replaceChildren(...listElements);
}
//   add below if statement back in later once the interval ID is created
if (FREELANCERS.length >= MAXLIST) {
  clearInterval(addFreelancerIntervalID);
}

// === Script ===
// In this section, we call the functions that we've defined above
render();
// `setInterval` will call the callback function every 2000 milliseconds (2 seconds)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addFreelancerIntervalID = setInterval(() => {
  addFreelancer();
  updateAverage(PRICES);
  render();
}, 2000);
