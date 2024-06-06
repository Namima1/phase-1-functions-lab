//returns a distance in blocks
//calculates distances below 42nd street


function distanceFromHqInBlocks(block){
  const hqBlock = 42;
  if (block >= hqBlock){
    return block - hqBlock;
  } else {
    return hqBlock - block;
  }
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(41));


//returns a distance in feet
//returns a distance in feet
//calculates distances below 42nd street

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
  
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(41));


//returns the distance travelled in feet
//returns a distance in feet
//returns distance when destination is below distance

function distanceTravelledInFeet(startBlock, endBlock) {
  const distance = Math.abs(endBlock - startBlock);
  const feetPerBlock = 264;
  return distance * feetPerBlock;
}


console.log(distanceTravelledInFeet(43, 48));

//gives customers a free sample
//charges 2 cents per foot when total feet travelled is 
//between 400 and 2000 (remember the first 400 feet are free!)
//charges 25 dollars for a distance over 2000 feet
//does not allow rides over 2500 feet

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400){
      return 0;
    } else if (distance > 400 && distance <= 2000){
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  console.log(calculatesFarePrice(43, 48));