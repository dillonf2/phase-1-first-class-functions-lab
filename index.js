const returnFirstTwoDrivers = scubaArray =>{
    return scubaArray.slice(0,2)
}

const returnLastTwoDrivers=driverArray=>{
    return driverArray.slice(driverArray.length-2,driverArray.length+1)
}
const selectingDrivers=[
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
const createFareMultiplier = value => {
    return function(fare){
        return value*fare
    }
}
const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3

function selectDifferentDrivers(array,function1){
    if (function1===returnFirstTwoDrivers){
       return returnFirstTwoDrivers(array)
    } else if (function1===returnLastTwoDrivers){
        return returnLastTwoDrivers(array)
    }
}
