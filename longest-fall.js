// add whatever parameters you deem necessary

// Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.

// Examples:

// longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// longestFall([]) // 0

//checking if the CURRENT INDEX VALUE is less that the PREVIOUS INDEX VALUE
// increment a counter if yes and compare to the max count, else start counter over at 1
//return the highest count

function longestFall(arr) {
	let counter = 1;
	let highestCount = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			counter += 1;
			highestCount = Math.max(highestCount, counter);
		} else {
			counter = 1;
		}
	}
	return highestCount || 1;
}
