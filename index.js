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

