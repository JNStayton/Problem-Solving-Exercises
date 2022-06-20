// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

function isSubsequence(str1, str2) {
	let idx1 = 0;
	let idx2 = 0;

	if (str1.length === 0) {
		return true;
	}

	while (idx2 < str2.length) {
		if (str1[idx1] === str2[idx2]) {
			idx1 += 1;
		}
		if (idx1 === str1.length) {
			return true;
		}
		idx2 += 1;
	}
	return false;
}
