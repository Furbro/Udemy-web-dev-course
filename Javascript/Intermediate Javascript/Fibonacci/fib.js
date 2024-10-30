function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        if (n === 1) return [0]
        const actualN = n-2
        //Write your code here:
        let output = [0, 1]
        let i = 0

        while (i < actualN){
            output.push(output[i] + output[i+1])
            i++
        } 
        return output
}

    
function fibonacciFritjof (n){

        let output = []
        let i = 0
        
        while (n > 0){
            if (i === 0 && n >= 3){
                output.push(i)
                i++
                n--
                output.push(i)
                n--
                output.push(i)
            } else if (i === 0 && n === 2){
                output.push(i)
                i++
                n--
                output.push(i)
                n--
            } else if (i === 0 && n === 1){
                output.push(i)
                i++
                n--
            } else 
                output.push(output[i] + output[i-1])
                i++
                n--
        }
        return output
        // console.log("Items in array: " + output.length)
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

    function fibonacciDown (n){
        let actualN = n-2
        const output = [0, 1]

        if (!n) return []
        if (n === 1) return [0]

        while (actualN > 0){
            output.push(output[n-2-actualN] + output[n-2-actualN+1])
            actualN--
        }
        return output
    }

    console.log(fibonacciGenerator(7))
    console.log(fibonacciFritjof(7))
    console.log(fibonacciDown(7))


    // The Fibonacci Exercise+
    // Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
    
    // Where every number is the sum of the two previous ones.
    
    // e.g. 0, 1, 1, 2, 3, 5 comes from
    // 0 + 1 = 1
    // 1 + 1 = 2
    // 1 + 2 = 3
    // 2 + 3 = 5
    // etc.
    
    // Create a function where you can call it by writing the code:
    // fibonacciGenerator (n)
    // Where n is the number of items in the sequence.
    // So I should be able to call:
    // fibonacciGenerator(3) and get
    // [0,1,1]
    // as the output.
    // IMPORTANT: The solution checker is expecting an array as the correct output.
    // Do NOT change any of the existing code.
    // You do NOT need any alerts or prompts, the result should be returned from the function as an output.
    // The first two numbers in the sequence must be 0 and 1.
    // Also, if you decide to create a for loop, 
    // make sure you explicitly specify var i = 0 rather than simply writing i = 0 . 
    // This is a quirk of the testing suite.
    // e.g. for (var i = 0; i < 10; i ++)     