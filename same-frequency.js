// add whatever parameters you deem

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function counter(str) {
	let counts = {};
	for (let val of str) {
		counts[val] = (counts[val] || 0) + 1;
	}
	return counts;
}

function sameFrequency(num1, num2) {
	let first = num1.toString();
	let second = num2.toString();

	if (first.length !== second.length) {
		return false;
	}

	const firstCount = counter(first);
	const secondCount = counter(second);

	for (let val in firstCount) {
		if (firstCount[val] !== secondCount[val]) return false;
	}
	return true;
}
