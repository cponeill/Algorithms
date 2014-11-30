/*

   ____  _                          ____                      _     
 | __ )(_)_ __   __ _ _ __ _   _  / ___|  ___  __ _ _ __ ___| |__  
 |  _ \| | '_ \ / _` | '__| | | | \___ \ / _ \/ _` | '__/ __| '_ \ 
 | |_) | | | | | (_| | |  | |_| |  ___) |  __/ (_| | | | (__| | | |
 |____/|_|_| |_|\__,_|_|   \__, | |____/ \___|\__,_|_|  \___|_| |_|
                           |___/                                   


*/

var binarySearch = function(array, value) { // Initializing variable and assigning it a function that calls both an array and value.
    var min = 0;                            // Setting up min, max, and i variables.
    var max = array.length - 1;
    var i;

    while (max >= min) {                  // While "max" is greater than or equal to "0".
	i = Math.floor((min + max)/2);    // Assigning "i" to the middle of "min" and "max".
	if (array[i] === value) {         // If the target value in the array is equal to the value
		return i;		  // Then return the value and stop looking.
	} else if (array[i] < value ) {   // If the target value is less than value.
		min = i + 1;              // Set the minimun equal to the target value plus one.
	} else {
		max = i - 1;              // Else set the maximum equal to the target value minus one.
		}
	}
	return -1;                        // If there is no prime value then return -1.
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var results = binarySearch(primes, 53);
console.log("Found a prime number at index " + results + ".");		
