let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
//newVesion = advice.match(/^.*(?=\sim)/)[0];
newVesion = advice.substring(0, advice.indexOf(' h'))
console.log(newVesion);