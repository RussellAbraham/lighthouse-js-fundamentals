const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
function printWhile(arr){
	let i = 0;
	while(i < arr.length){
		console.log(arr[i]);
		i++;
	}
}
printWhile(ingredients);

// Write a for loop that prints out the contents of ingredients:
function printFor(arr){
	for(let i = 0;i < arr.length;i++){
		console.log(arr[i])
	}
}
printFor(ingredients);

// Write any loop (while or for) that prints out the contents of ingredients backwards:
function printReverse(arr){		
	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i])
	}
}
printReverse(ingredients);