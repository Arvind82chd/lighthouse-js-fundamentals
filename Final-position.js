const finalPosition = function() {
  let currentPosition = []; // = i[0, 0];
  for (let move of moves) {
    if (move === 'north') {
        currentPosition.push[x, y+1];
        currentPosition;
    } 
    else if (move === 'east'){
        currentPosition[x+1, y];
        return currentPosition;
    } 
    else if (move === 'south') {
        currentPosition[x, y-1];
        return currentPosition;
    }
    else if (move === 'west') {
        currentPosition[x-1, y];
        return currentPosition;
    }  
console.log(currentPosition);
}
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(moves));
