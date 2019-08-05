// const routine = [wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed), throwFrisbee(dogName, dogBreed), walkHome(dogName, dogBreed), unleashDog(dogName, dogBreed)]
// const routine = [wakeDog(), leashDog(), walkToPark(), throwFrisbee(), walkHome(), unleashDog()]
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

// ???????????? exerciseDog calls into the independent functions
// Not sure what this means
function exerciseDog(dogName, dogBreed) {
  result = [];

  for (let i = 0; i < routine.length; i++) {
    let dogActionString = routine[i](dogName, dogBreed);
    result.push(dogActionString);
  }

  return result;
}

function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}
