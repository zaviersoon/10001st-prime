// 10001st prime

function findPrimeNumber(n){
    function isPrime(k){ 
      for( var j = 2; j < k; j++){
        if( k % j === 0 ){ return false; } 
      }
      return true;
    }
    while(c < n){ 
      if( isPrime(i) ) {  
        c++; 
        nPrime = i; 
      }
      i++; 
    } 
     
    return nPrime;
  }

  console.log(findPrimeNumber(10001))