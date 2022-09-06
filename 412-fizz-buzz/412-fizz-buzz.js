/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
       let answer = [];
        
    for (var i=1; i<=n; i++){
        let str = "";
    if (i % 3  === 0){
        str += ("Fizz");
    }if (i % 5  === 0){
         str += ("Buzz");
    }
     answer.push(str.length ? str : i.toString())
    }   
return answer;
}

