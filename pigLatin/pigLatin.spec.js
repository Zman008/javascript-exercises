const pigLatin = require('./pigLatin')

//  * modules
//  * strings

describe('translate', () => {
	test('translates a word beginning with a vowel', () => {
		expect(pigLatin("apple")).toBe('appleay');
	});

	test('translates a word beginning with a consonant', () => {
		expect(pigLatin("banana")).toBe("ananabay");
	});

	test('translates a word beginning with two consonants', () => {
		expect(pigLatin("cherry")).toBe('errychay');
	});

	test('translates two words', () => {
		expect(pigLatin("eat pie")).toBe('eatay iepay');
	});

	test('translates a word beginning with three consonants', () => {
		expect(pigLatin("three")).toBe("eethray");
	});

	test('counts "sch" as a single phoneme', () => {
		expect(pigLatin("school")).toBe("oolschay");
	});

	test('counts "qu" as a single phoneme', () => {
		expect(pigLatin("quiet")).toBe("ietquay");
	});

	test('counts "qu" as a consonant even when its preceded by a consonant', () => {
		expect(pigLatin("square")).toBe("aresquay");
	});

	test('translates many words', () => {
		expect(pigLatin("the quick brown fox")).toBe("ethay ickquay ownbray oxfay");
	});
});
