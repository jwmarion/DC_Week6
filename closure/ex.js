// function counter(){
//   var count = 0;
//   function actuallyCount(){
//     count++;
//     return count;
//   }
//   return actuallyCount;
// }
//   var count1 = counter();
//   var count2 = counter();
//
//   console.log(count1());
//   console.log(count1());
//   console.log(count2());
//   console.log(count2());
//   console.log(count1());
//
// function counter(){
//   var count = 0;
//   function increment(){
//     count++;
//     return count;
//   }
//   function decrement(){
//     count--;
//     return count;
//   }
//   return{
//     increment: increment,
//     decrement: decrement
//   };
// }
//   var count1 = counter();
//   var count2 = counter();
//
//   // console.log(count1());
//   // console.log(count1());
//   // console.log(count2());
//   // console.log(count2());
//   // console.log(count1());
// console.log(count1.increment());
// console.log(count1.increment());
// console.log(count1.increment());
// console.log(count1.decrement());
// console.log(count1.decrement());
// console.log(count1.decrement());


var shoot = function() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];
    function actuallyFire(row,col){
      if (board[row][col] === 'o') {
        board[row][col] = 'x';
        return 'Hit!';
      } else {
        return 'Miss';
      }
    }
  return actuallyFire;
}();


console.log(shoot(0, 0));
