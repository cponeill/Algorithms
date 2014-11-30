/*

  ____  _                          ____                      _     
 | __ )(_)_ __   __ _ _ __ _   _  / ___|  ___  __ _ _ __ ___| |__  
 |  _ \| | '_ \ / _` | '__| | | | \___ \ / _ \/ _` | '__/ __| '_ \ 
 | |_) | | | | | (_| | |  | |_| |  ___) |  __/ (_| | | | (__| | | |
 |____/|_|_| |_|\__,_|_|   \__, | |____/ \___|\__,_|_|  \___|_| |_|


*/

var binarySearch = function(xs, ys) {
	var min = 0;
	var max = xs.length - 1;
	var i;

	while (max >= min) {
		i = Math.floor((min + max)/2);
		if (xs[i] === ys) {
			return i;
		} else if (xs[i] < ys) {
			min = i + 1;
		} else {
			max = i - 1;
		}
	}
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var results = binarySearch(primes, 53);
console.log("Found a prime number at index " + results + ".");		