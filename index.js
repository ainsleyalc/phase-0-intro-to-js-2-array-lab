// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
    

function destructivelyAppendCat() {
    cats.push('Ralph');
  };

  function destructivelyPrependCat(){
    cats.unshift('Bob')
  }
   
  function destructivelyRemoveLastCat(){
    cats.pop()
  }
  function destructivelyRemoveFirstCat(){
    cats.shift()
  }
function appendCat(){
    let newArray = [...cats,"Broom"]
    return newArray
}

function prependCat(){
let newArray = ["Arnold", ...cats]
return newArray

}function removeLastCat(){
    let newArray = cats.slice(0,cats.length-1)
    return newArray
}
function removeFirstCat(){
    let newArray = cats.slice(1)
    return newArray
}