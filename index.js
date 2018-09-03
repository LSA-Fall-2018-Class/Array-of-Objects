'use strict';

// Enter your js code Here

// Array indices for players array.  Constants.
var PLAYER_INDEX_ID = 0;
var PLAYER_INDEX_NAME = 1;
var PLAYER_INDEX_NEXT = 2;
var PLAYER_INDEX_POINTS = 3;

var players = [[111, "Jon", 222, 0], [222, "Joey", 333, 0], [333, "Nathan", 444, 0], [444, "Zach", "111", 0]];
var admins = [{id: 555, name: "Bob", next: 666, points: 0}, {id:666, name:"Hank", next: 111, points: 0}, {id:777, name:"Ed", next: 222, points: 0}, {id:888, name:"Moe", next: "333", points: 0}];

// Create ---------------------------------------
console.log("--- Create ------------");

// push array function
players.push([123, "Adam", 222, 0]);
console.log("Players = " + players);
admins.push({id: 987, name: "Jerry", next: 777, points: 0});
console.log("Admins = " + admins);

// manual creation
players[players.length] = [999, "Sue", 555, 0];
console.log("Players = " + players);
admins[admins.length] = {id: 765, name: "Stan", next: 999, points: 0};
console.log("Admins = " + admins);

// Retrieve ------------------------------------
console.log("--- Retrieve ------------");

// get the name of the second player
console.log("Second player name is: " + players[1][PLAYER_INDEX_NAME]); // use the constant
// get the name of the second admin
console.log("Second admin name is: " + admins[1].name);

// Update --------------------------------------
console.log("--- Update ------------");

// update the points of the third player
players[2][PLAYER_INDEX_POINTS] = 3
console.log("Third player points is: " + players[2][PLAYER_INDEX_POINTS]);
// get the points of the third admin
console.log("Third admin points is: " + ++admins[2].points);

// Delete  --------------------------------------
console.log("--- Delete ------------");

// pop function
players.pop();
console.log("Players = " + players);

admins.pop();
console.log("Admins = " + admins);

// splice 1 off at position 1
players.splice(1,1);
console.log("Players = " + players);

admins.splice(1,1);
console.log("Admins = " + admins);
