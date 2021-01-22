(function(){
    function add(arrayOfNumbers){
        sum = 0
         for(i =0;i<arrayOfNumbers.length;i++){
         sum += parseInt(arrayOfNumbers[i])
        }return sum
        }
        
        function subtract(numberOne,numberTwo){
            return (numberOne - numberTwo)
        }
        function multiply(arrayOfNumbers){
            product = 1
            for(i = 0;i<arrayOfNumbers.length;i++){
                product *= arrayOfNumbers[i]
            }
            return product
        }
        function divde(numberOne,numberTwo){
            if (numberTwo != 0){
            return (numberOne / numberTwo) }
            else return "invalid operation"
        }
        function min(arrayOfNumbers){
            min = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (min > arrayOfNumbers[i]){
                min = arrayOfNumbers[i]
            }}
            return min;

        }
        function max(arrayOfNumbers){
            max = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (max < arrayOfNumbers[i]){
                max = arrayOfNumbers[i]
            }}
            return max;
        }
        function square(number){
            return Math.pow(number,2)
        }
        function average(arrayOfNumbers){
            let total = add(arrayOfNumbers)
            return total/arrayOfNumbers.length
        }
        
        var choice = parseInt(prompt("<--------- A mini calculator--------->\n1: to add\n2: to subtract\n3: to multipy\n4: to divide \n5: to get maximum \n6: to  get minimum \n7: to square\n8:To get Average"))
        function createArray(){
            arrayOfNumbers  = [];
            numberValue = parseInt(prompt("enter the number of values you want to Compute"));
            for(i=0;i<numberValue;i++){
                arrayOfNumbers[i] =parseInt(prompt("Enter the " +(i+1) + " element"))
            };
            return arrayOfNumbers;
        }
        switch(choice){       
            case 1: {
                alert("sum = " + add(createArray()));
                
            };
            break
            case 2:{
                numberOne = parseInt(prompt("First number"))
                numberTwo = parseInt(prompt("Second number"))
                alert("difference = " + subtract(numberOne,numberTwo))
                
            }break
            case 3:{

                alert("product = " + multiply(createArray()))
                
            }break
            case 4:{
                numberOne = parseInt(prompt("First number"))
                numberTwo = parseInt(prompt("Second number"))
                alert("qutioent = " + divde(numberOne,numberTwo))
                
            }break
            case 5: {

                alert("The maximum value is " + max(createArray()));
                

            }break
                            
            case 6: {
                alert("The minimum value is "  + min(createArray()));
                
            }break
            case 7: {
                number = parseInt(prompt("enter number"))
                    alert("the square of " + number +" = " + square(number))
                    
                
            }break
            case 8: {
                alert("The average is " + average(createArray()))
            }break
            default:
                alert("no input detected")
            
            
        };
})();