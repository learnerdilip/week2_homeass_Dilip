function groupAdultsByAgeRange(people) {
  // for empty array input
  if(people.length === 0) {
    return {}
  }
  // filter the people with age less than 18 years
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
  //to filter out empty arrays
  const validObjArr = Object.entries(groupAdults).filter(item => item[1].length > 0)
  console.log(validObjArr)
  // if array is empty return empty object
  if(validObjArr.length === 0) {
    return {}
  }
  return groupAdults
}
module.exports = { groupAdultsByAgeRange }
groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])