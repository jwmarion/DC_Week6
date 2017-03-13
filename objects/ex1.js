// var spiderman = {
//   name: 'Spiderman',
//   realName: 'Peter Parker',
//   sayHi: function(e){
//     console.log('I am ' + this.name + '!');
//   }
// };
// var superman = {
//   name: 'Superman',
//   realName: 'Clark Kent',
//   sayHi: function(e){
//     console.log('I am ' + this.name + '!');
//   }
// };
//
//
// superman.sayHi();
// spiderman.sayHi();
//
//
//
// //two
//
// function revealIdentify() {
//   console.log('My real name is ' + this.realName + '.');
// }
//
// revealIdentify.apply(superman);
// revealIdentify.apply(spiderman);
//
// //inheritance
//
// var mom = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   eyeColor: 'brown',
//   hairColor: 'black'
// };
// var daughter = {
//   firstName: 'Ilene',
//   hairColor: 'brown'
// };
//
// //one
// daughter.__proto__=mom;
// console.log(daughter);
// console.log(daughter.lastName + '\n' + daughter.eyeColor);
//
// //two
// mom.showInfo=function(){
//   console.log(this.firstName +'\n' + this.lastName+'\n' + this.eyeColor +'\n' + this.hairColor);
// };
//
// mom.showInfo();
// daughter.showInfo();
//
// //five
//
// console.log('\n');
// function Person(name) {
//   this.name = name;
//   this.friends = [];
//   this.greet=function(other){
//     console.log(this.createGreeting(other));
//   };
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

console.log('\n');
 function createPerson(name){
   var Person = {
     name: name,
     friends: [],
     greet: function(other){
       console.log(this.createGreeting(other));
     }
   };
   Person.addFriend = function(friend) {
     this.friends.push(friend);
   };
   Person.createGreeting = function(other) {
     return 'Yo ' + other.name + '! from ' + this.name + '.';
   };
   Person.lazyGreet = function(other){
     var that=this;
     setTimeout(function(){
        console.log('Yo ' + other.name + '! from ' + that.name + '.');
     },500);
   };
   Person.createGreetingForFriends = function(){

     this.friends.map(function(e){
       console.log(this.createGreeting(e));
     }.bind(this));
   };
   return Person;
 }

james = createPerson('james');
spaceJames = createPerson('spaceJames');
superJames = createPerson('superJames');

// james.lazyGreet(spaceJames);
james.addFriend(spaceJames);
james.addFriend(superJames);

james.createGreetingForFriends();
console.log('\n');
