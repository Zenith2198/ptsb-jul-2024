//while loop
let account = 0;
console.log("adding money to account!")
//add 10 dollars to account
while (account < 10) {
	account++;
	console.log("account balance:", account)
	//go back to the top
}
console.log("money has been added to account!")

//add 5 dollars to account
while (true) {
	if (account === 15) {
		//escape out of while loop, like the conditional was false
		break;
	}
	console.log("true")
	account++;
}
console.log(account)

//for let loop
//add 5 dollars to account
for (let i = 0; i < 5; i++) {
	console.log("i:", i)
	account++;
	console.log("account balance:", account)
	//i++
}

//do while loop
//subtract 5 dollars from account
console.log("do while")
do {
	account--;
	console.log("account balance:", account)
} while (account > 20);


//arrays
console.log("arrays:")
let shoppingList = ["milk", "eggs", "chicken"];
//add to shopping list
shoppingList.push("bread");
console.log(shoppingList)

//for of loop
for (let item of shoppingList) {
	console.log(item)
}

//remove item from array
let removedItem = shoppingList.pop();
console.log(shoppingList)
console.log(removedItem)

//index an array
console.log(shoppingList[1])
//use length property on array to determine how many times to loop
for (let i = 0; i < shoppingList.length; i++) {
	console.log("i:", i)
	console.log("item:", shoppingList[i])
}