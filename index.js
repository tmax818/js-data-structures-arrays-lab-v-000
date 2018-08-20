const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
} 

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
} 


function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
} 

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
} 

function appendDriver(name) {
  let driversc = drivers.slice();
  driversc.push(name);
  return driversc;
}

function prependDriver(name) {
  let driversc = drivers.slice();
  driversc.unshift(name);
  return driversc;
}


function removeLastDriver(name) {
  let newdrivers = drivers.slice();
  newdrivers.pop(name);
  return newdrivers;
}

function removeFirstDriver(name) {
  let newdrivers = drivers.slice();
  newdrivers.shift(name);
  return newdrivers;
}