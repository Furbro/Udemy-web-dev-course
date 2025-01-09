const houseKeeper = {
  name: "Klarisa",
  age: "25",
  yearsOfExperience: 5,
  workpermit: true,
  areasOfExpertice: ["Bathroom", "Kitchen", "Bedrooms"],
  languages: ["Japanese", "English"],
};

/* The following function is a constructor function which lets you use less time on writing code, 
    instead of making an object the way it is done above you set the parameters that each same object should have,
    you can then just write the input and code more efficiently.*/

function HouseKeeper(
  name,
  age,
  yearsOfExperience,
  workpermit,
  areasOfExpertice,
  languages
) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.workpermit = workpermit;
  this.areasOfExpertice = areasOfExpertice;
  this.languages = languages;
  this.clean = function () {
    alert("cleaning in progress...");
  };
}

let houseKeeper1 = new HouseKeeper(
  "Carl",
  21,
  1,
  true,
  ["Garage", "Yard", "Gutters"],
  ["English"]
);
