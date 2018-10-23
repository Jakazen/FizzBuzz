
//A general approach 
// for (var i=1; i <= 100; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

//A cleaner approach 
// function fizzbuzz(num, fizz, buzz) {    
//     for (i = 1; i <= num; i++) {    
//         if (i % (fizz * buzz) == 0) {
//             console.log("FizzBuzz");
//         } else if (i % buzz == 0) {
//             console.log("Buzz");
//         } else if (i % fizz == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }  
//    }    
   
//    fizzbuzz(100, 3, 5);

//The second one is more easier to adjust to any multiple up to 100