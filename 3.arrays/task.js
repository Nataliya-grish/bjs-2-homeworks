function compareArrays(arr1, arr2) {
 let result = (arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]);   
    
 return result; // boolean
}

function advancedFilter(arr) {
    
  let resultArr = arr.filter(namber => namber >= 0).filter(namber => namber % 3 == 0).map(namber => namber * 10)

  return resultArr; // array
}
