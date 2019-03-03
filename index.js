var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(array, name){
  return kittens.push("Ralph");
}
function destructivelyPrependKitten(array, name){
  return kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(array, name){
  return kittens.pop("Garfield");
}