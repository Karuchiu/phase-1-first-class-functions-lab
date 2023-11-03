const returnFirstTwoDrivers = driversArray => {
    return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
]

const createFareMultiplier = integerMultiplier => {
    return fare => {
        return fare  * integerMultiplier
    }
}

const fareDoubler = fare => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = fare =>{
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (driversArray, fun)=> {
    return fun(driversArray)
}