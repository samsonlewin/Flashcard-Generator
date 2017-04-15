

function BasicCard (front, back){
	if (!(this instanceof BasicCard)) {
        return new BasicCard (front, back);
    }
	this.front = front;
	this.back = back;
};

function ClozeCard(text, cloze){
	if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
	this.text = text;
	this.cloze = cloze;
};


ClozeCard.prototype.returnClozeDeleted = function(){
	var re = this.cloze;
	this.clozeddeleted = this.text.replace(re,'...');
	console.log(this.clozeddeleted);

};

ClozeCard.prototype.returnPartial= function(){
	console.log(this.cloze);
};


ClozeCard.prototype.returnFull= function(){
	console.log(this.text);
};


//`ClozeCard` should throw or log an error when the cloze deletion does _not_ appear in the input text.
ClozeCard.prototype.returnError= function(){
	var str = this.text;
	var otherstr = this.cloze;
	if (str.includes(otherstr)){
		console.log("This works!");
	}else{
		console.log("Oops! There is a error here!")
	};
};


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

var firstPresidentCloze = new  ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);

console.log("=========");

firstPresidentCloze.returnPartial();  
firstPresidentCloze.returnClozeDeleted(); 
firstPresidentCloze.returnFull(); 
firstPresidentCloze.returnError(); 

console.log("=========");

//=============

var smallestCountry = new BasicCard(
	"What is the smallest country in the world?", "Vatican");

var smallestCountryCloze = new ClozeCard(
	"Vatican is the smallest country in the world", "Vatican");

console.log(smallestCountry.front);
console.log(smallestCountry.back);

console.log("=========");

smallestCountryCloze.returnError(); 
smallestCountryCloze.returnPartial();  
smallestCountryCloze.returnClozeDeleted(); 
smallestCountryCloze.returnFull(); 


console.log("=========");





//* Write your constructors such that users can call them with or without the `new` keyword. 

 // * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
