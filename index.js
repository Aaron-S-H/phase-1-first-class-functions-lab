const returnFirstTwoDrivers = function () {
    let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function () {
    let drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(param){
    return function(fare) {return fare * param};
}; 
//const fareMultiplier = function() {
    //createFareMultiplier(4);

const fareDoubler = createFareMultiplier(2) ;

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}



