function isPrime(x) { 
     if (x < 2) return false; 
     for (let i = 2; i <= Math.sqrt(x); i++) { 
          if (x % i === 0) return false; 
     } 
     return true; 
} 

function nextPrime(x) { 
     while (!isPrime(x)) { 
          x++; 
     } 
     return x; 
}

function findDifference(x) { 
     return nextPrime(x) - x; 
}


let x = 15; 
console.log(isPrime(x)); // prints false
console.log(nextPrime(x)); // prints 17
console.log(findDifference(x)); // prints 
