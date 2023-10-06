/***********************************************************/
/*              		  Problem			               */
/***********************************************************/
// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'


/***********************************************************/
/*              		Solution			               */
/***********************************************************/
function reverse(str) {
	let final = "";

	for (let i = str.length - 1; i >= 0; i--) {
		final += str[i];
	}

	return final;
}


/***********************************************************/
/*              	Complexity Analysis		               */
/***********************************************************/
// Time Complexity: O(n); We are looping through given string.
// Space Complexity: O(n); Because the reversed string has the same size as the given string.



/***********************************************************/
/*              		Test Case			               */
/***********************************************************/
mocha.setup('bdd');
const { assert } = chai;

describe('String Reversal', () => {
	it('reverse() correctly reverses string', () => {
		assert.equal(reverse('ffaa'), 'aaff');
		assert.equal(reverse('  aaff'), 'ffaa  ');
	});
});

mocha.run();
