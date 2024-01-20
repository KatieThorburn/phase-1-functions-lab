// Code your solution in this file!
let blocks = 0;
function distanceFromHqInBlocks(pickupLocation, headquarters) {
      headquarters = 42;
      
        if (pickupLocation <= headquarters){
          return blocks = (headquarters - pickupLocation);
        }
        else {
          return blocks = (pickupLocation - headquarters);
        }
    }
  
  function distanceFromHqInFeet(pickupLocation, headquarters, feet){
    headquarters = 42;
    feet = 264;
    if (pickupLocation <= headquarters){
      return ((headquarters - pickupLocation)*feet);
    }
    else {
      return ((pickupLocation - headquarters)*feet);
    }
  }
  function distanceTravelledInFeet(pickupLocation, dropOffLocation, feet){
    
    feet = 264;
    if (pickupLocation <= dropOffLocation){
      return ((dropOffLocation - pickupLocation)*feet);
    }
    else {
      return ((pickupLocation - dropOffLocation)*feet);
    }
  }
 function calculatesFarePrice(start, destination){
  let diff = 0;
  let Fare = 0;
    if (start <= destination){
      diff = (destination - start)
    }
    else {
      diff = (start - destination)
    }
    
    let distanceInFeet = diff * 264;
   

    if (distanceInFeet <= 400) {
      return Fare = 0;
    }
    else if (distanceInFeet > 400, distanceInFeet <= 2000) {
      return Fare = ((distanceInFeet - 400)*0.02)
    }
    else if (distanceInFeet > 2000, distanceInFeet < 2500){
      return Fare = 25;
    }
    else if (distanceInFeet >= 2500) {
      return Fare = "cannot travel that far"
    }
    
 }
  console.log(distanceFromHqInBlocks(43));
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(34));
  console.log(distanceFromHqInFeet(43));
  console.log(distanceFromHqInFeet(50)); 
  console.log(distanceFromHqInFeet(34));
  console.log(distanceTravelledInFeet(43, 48));
  console.log(distanceTravelledInFeet(50, 60));
  console.log(distanceTravelledInFeet(34, 28));
  console.log(calculatesFarePrice(43, 44));
  console.log(calculatesFarePrice(34, 32));
  console.log(calculatesFarePrice(50, 58));
  console.log(calculatesFarePrice(34, 24));
