const whichSchool  = function (age) {
    console.log( "I am " + age + ". Which school should I go to?" );
    if (age >= 1 && age < 13) {
      console.log("You should go to Elementary School.");
      return "Elementary School";
    }
    else if (age >= 13 && age <= 18) {
      console.log("You should go to Secondary School");
      return "Secondary School";
    }
    else if (age >= 19 && age <= 100) {
      console.log("You should go to Lighthouse Labs");
      return "Lighthouse Labs";
    } // Your code in here ...
  }
  console.log(whichSchool);
  
  whichSchool(30)
  whichSchool(10)
  whichSchool(4)