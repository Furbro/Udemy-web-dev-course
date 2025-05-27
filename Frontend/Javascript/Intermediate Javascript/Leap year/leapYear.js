function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.   
        
        if ((year%4 === 0 && year%100 === 0 && year%400 === 0) || (year%4 === 0 && year%100 !== 0)) {
            return "This is a leap year" 
        }
        else { 
            return "This is not a leap year"
        }

    /**************Don't change the code below****************/    
    
    }

    console.log(isLeap(2000))
    console.log(isLeap(2001))
    console.log(isLeap(2002))
    console.log(isLeap(2003))
    console.log(isLeap(2004))
    console.log(isLeap(2100))
    console.log(isLeap(1993))

    