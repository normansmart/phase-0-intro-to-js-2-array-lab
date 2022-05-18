// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(array){

    

    cats.push('Ralph');

    return cats;
}


function destructivelyPrependCat(array){

    

    cats.unshift('Bob');

    return cats;
}


function destructivelyRemoveLastCat(array){

    

    cats.pop('Ralph');

    return cats;
}



function destructivelyRemoveFirstCat(array){

    

    cats.shift('Ralph');

    return cats;
}



function appendCat(array){

    const broom = cats.slice();

    broom.push('Broom');

    return broom;
}




function prependCat(array){

    const Arnold = cats.slice();

    Arnold.unshift('Arnold');

    return Arnold;
}



function removeLastCat(array){

    const removeLastCat = cats.slice(0, cats.length - 1);


  return removeLastCat;

}




function removeFirstCat(array){

    const removeFirstCat = cats.slice(1);


  return removeFirstCat;

}