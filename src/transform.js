
function groupAdultsByAgeRange(people) {
  if(people.length === 0) {
    return {}
  }
  const adults = people.filter(person => person.age >= 18)
  const groupAdults = adults.reduce(((agg,item) => {
    // reduce function conditions
    // console.log(agg,item,"ITEM AND THE AGGREGATOR STATUS")
    if(item.age <= 20) {
      agg["20 and younger"].push(item)
    } else if(item.age > 20 && item.age <= 30) {
      agg["21-30"].push(item)
    } else if(item.age > 30 && item.age <= 40) {
      agg["31-40"].push(item)
    } else if(item.age > 40 && item.age <= 50) {
      agg["41-50"].push(item)
    } else {
      agg['51 and older'].push(item)
    }
    // console.log(agg)
    return agg
  }),{"20 and younger":[],"21-30":[],"31-40":[],"41-50":[],"51 and older":[]})
  console.log(groupAdults)
  return groupAdults
}

groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])

module.exports = { groupAdultsByAgeRange }

// ✓ JS file should exist, and exported value should be a function
// 1) an empty array results in an empty object
// 2) filters out people under the age of 18
// 3) only contains non-empty groups
// 4) groups array of people by age