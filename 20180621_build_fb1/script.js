var database = [
{
	username: "andrew",
	password: "secret"
}

];


var newsFeed = [

{
	username: "Ravi",
	timeline: "I am so excited"
},

{
	username: "Sam",
	timeline: "Javascript is so easy"
}


];


var userName = prompt("Username");
var passWord = prompt("Password");


function signIn (user, pass) {

	if (user === database[0].username && pass === database[0].password){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}


}


signIn(userName, passWord);