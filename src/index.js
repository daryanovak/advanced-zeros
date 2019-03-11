module.exports = function getZerosCount(number, base) {
  // your implementation
  
	//factorize base
	let base_primes = {};
	let temp_base = base;
	for(let i = 2; i * i <= temp_base; i++) {
		while(temp_base % i == 0) {
			temp_base /= i;
			if(base_primes.hasOwnProperty(i)) {
				base_primes[i]++;
			}
			else {
				base_primes[i] = 1;
			}
		}
	}
	if(temp_base > 1) {
		if(base_primes.hasOwnProperty(temp_base)) {
				base_primes[temp_base]++;
		}
		else {
			base_primes[temp_base] = 1;
		}
	}
	//
	
	let can = [];
	for(let prime in base_primes) {
		let ans = 0;
		let mul = prime;
		while(mul <= number) {
			ans += Math.floor(number / mul);
			mul *= prime;
		}
		can.push(Math.floor(ans / base_primes[prime]));
	}
	let min = number;
	for(let i = 0; i < can.length; i++) {
		if(can[i] < min) {
			min = can[i];
		}
	}
	return min;
}