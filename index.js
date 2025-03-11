// Code your solution here

//findmatching function

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
    
    return drivers.filter(function(driver) {
        return  driver.toLowerCase() === name.toLowerCase(); 
})
}

//return as per test 
findMatching(drivers ,'bobby');
findMatching(drivers ,'Sammy');

// //confirm if function works
console.log(findMatching(drivers ,'bobby'))
console.log(findMatching(drivers ,'sammy'))


//fuzzymaych function

function fuzzyMatch(drivers,query) {
    // const drivers =[] ;
    // drivers.length = 0;

    //   drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    return drivers.filter(function(driver) {
        return  driver.toLowerCase().startsWith(query.toLowerCase());
})
}

//return as per test 
fuzzyMatch(drivers ,'Sa');
fuzzyMatch(drivers ,'y');

//confirm if function works
console.log(fuzzyMatch(drivers ,'Sa'))
console.log(fuzzyMatch(drivers ,'y'))




//matchname function
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers , name) {
   

    return drivers2.filter(function(driver) {
        return  driver.name === name; 
})

}

matchName(drivers, 'Bobby');

console.log(matchName(drivers,'Bobby'));