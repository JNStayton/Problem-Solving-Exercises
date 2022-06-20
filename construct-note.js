// add whatever parameters you deem necessary

// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function freqCounter(str) {
	let freqs = {};
	for (let ltr of str) {
		let count = freqs[ltr] || 0;
		freqs[ltr] = count + 1;
	}
	return freqs;
}

function constructNote(msg, letters) {
	const msgFreq = freqCounter(msg);
	const lettersFreq = freqCounter(letters);

	for (let ltr in msgFreq) {
		// if there are no letters from the message
		if (!lettersFreq[ltr]) {
			return false;
		}
		// if there are fewer letters than in the message
		if (lettersFreq[ltr] < msgFreq[ltr]) {
			return false;
		}
	}
	return true;
}

//only lower case
//no spaces or special characters
//make a frequency counter to keep track of the msg and letters counts
//loop through to compare the keys/values of the two counters
//return a boolean
