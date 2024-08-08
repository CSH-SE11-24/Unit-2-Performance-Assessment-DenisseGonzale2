const prompt = require('prompt-sync')()

//objects that you can access into.

let lives= 3
let room1={
	items: ["books ","chair ","cat "]
}
let room2={
	items2:["bed ","broken doll ","rat "]
}
let room3={
	items3:["mirror ", "a ripped photo "]
}
let livingRoom={
	items:["couch ", "pieces of ripped paper ","coachroach "]
}
let kitchen={
	items4:["moldy half eaten cake ", "knife ","pile of mud "]
}
 
//description!! 

console.log("☆ HELLO! Welcome this is a game based on a haunted house, in the haunted house you will have 3 lives in which you can lose based on challanges ☆ ")


// this starts the game !!!!

let intro=prompt("Do you wish you start?(type'yes/no')>")

//background info

if (intro=="yes"){
 console.log("  It's been a long day, you've been trick-a-treating with your friends. You go home and just as you were about to go to sleep you realized you forgot your phone. You go running outside and go searching for it.You stumble across an old house, you feel like you shouldn't go in, but there's a dim light that catches your attention")
}else{
	console.log("ok bye ≽^•⩊•^≼")
}

// real start of the story 

let gameStory2= prompt("do you go in?>")
 if(gameStory2=="yes"){
	console.log("The second you entered the house you turned into a tabby cat")
	 
 }else{
	console.log("You didnt go in and as you were crossing the street you get hit by a car. You woke up! it was all a dream..")
 }


// decision and results 

function playGame(){
	
let user;
while(lives>0){
    console.log("The door slams shut, now you have to find another way out.You entered the living room." + " You see " + livingRoom["items"])
	console.log("  - ROOM 1 - ROOM 2 - ROOM 3 - KITCHEN 4")
	for(let options1=1;options1<5; options1++){
		console.log(options1)
	}
    user=prompt("where do you wanna go?>"); 
	user=parseInt(user)
	
   if(user==1){
	console.log(" you enter the room and see " + room1["items"])
	console.log("you got jump scared by a rat!")
	   
   }else if(user=="2"){
	console.log("you enter the room and see " + room2["items2"])
	console.log("as you stepped into the room a board came loose, and you fell into a hole filled with mice! You woke up turns out it was all a dream. ")
   }else if(user==3){
	console.log("you enter the room and see" + room3["items3"])
	console.log("You look at the mirror, but something is off, is it the tiny crack? or many the picture that in the bottom corner.You didn't have much time to think, when suddenly, THE WHOLE MIRROR CRACKED! a sharp went flying at you but you missed it by an inch. You look back at the mirror but something, or someone? went jumping out of it. You woke up, luckily it was all a dream...or so you thought..")
    }else if(user==4){
	console.log("you see " + kitchen["items4"]+ "uh no. you're unlucky, your cat instict told you to eat the cake now youre feeling sick. You suddenly feel unwell and faint. You're back to reality! It was all a dream.... or was it.? ")
	
}
}
}
playGame()



// lives








