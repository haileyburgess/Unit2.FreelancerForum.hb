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
  "Data Analyst",
  "Architect",
  "Quantitative Analyst",
  "Housing Developer",
  "Product Manager",
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
    occupation: "Data Analyst",
  },
];

// Add Freelancer with random properties for all three elements: name, price, occupation

function addFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const price = PRICES[Math.floor(Math.random() * PRICES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  FREELANCERS.push({ name, price, occupation });
  if (FREELANCERS.length >= MAXLIST){
    clearInterval(addFreelancerIntervalID);
  }
}
