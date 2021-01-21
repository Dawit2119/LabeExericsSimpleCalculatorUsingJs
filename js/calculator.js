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
                
            }
            return product
        }
        function divde(numberOne,numberTwo){
            if (numberTwo != 0){
            return (numberOne / numberTwo) }
            else return "invalid operation"
        }
        function max(arrayOfNumbers){
            min = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (min < parseInt(arrayOfNumbers[i])){
                min = parseInt(arrayOfNumbers[i])
            }}
            return min;

        }
        function max(arrayOfNumbers){
            max = arrayOfNumbers[0]
            for(i=0;i<arrayOfNumbers.length;i++){
                if (min < parseInt(arrayOfNumbers[i])){
                max = parseInt(arrayOfNumbers[i])
            }}
            return max;
        }
        function square(number){
            return Math.pow(2,number)
        }
        function average(arrayOfNumbers){
            let total = add(arrayOfNumbers)
            return total/arrayOfNumbers.length
        }
        console.log(" A mini calculator")
        var choice = parseInt(prompt("1: to add\n2: to subtract\n3: to multipy\n4: to divide \n5: to get maximum \n6: to  get minimum \n7: to square\n8:To get Average"))
        switch(choice){
            
            case 1: {
                arrayOfNumbers  = [];
                numberValue = prompt("enter the number of values you want to add");
                for(i=0;i<numberValue;i++){
                    arrayOfNumbers[i] = prompt("Enter the " +i+ " element")
                };
                alert("sum = " + add(arrayOfNumbers));
                
            };
            break
            case 2:{
                numberOne = prompt("First number")
                numberTwo = prompt("Second number")
                alert("difference = " + subtract(numberOne.numberTwo))
                
            }break
            case 3:{
                arrayOfNumbers  = []
                numberValue = prompt("enter the number of values you want to multiply")
                for(i=0;i<numberValue;i++){
                    arrayOfNumbers[i] = prompt("Enter the " +i+ " element")
                }
                alert("product = " + multiply(arrayOfNumbers))
                
            }break
            case 4:{
                numberOne = prompt("First number")
                numberTwo = prompt("Second number")
                alert("qutioent = " + divde(numberOne.numberTwo))
                
            }break
            case 5: {
                arrayOfNumbers  = []
                numberValue = prompt("enter the number of values you want to get maximum of them")
                for(i=0;i<numberValue;i++){
                    arrayOfNumbers[i] = prompt("Enter the " +i+ " element")
                }
                alert("The maximum value is " + max(arrayOfNumbers))
                

            }break
                            
            case 6: {
                arrayOfNumbers  = []
                numberValue = prompt("enter the number of values you want to get minimum of them")
                for(i=0;i<numberValue;i++){
                    arrayOfNumbers[i] = prompt("Enter the " +i+ " element")
                }
                alert("The minimum value is "  + min(arrayOfNumbers))
                
            }break
            case 7: {
                number = prompt("enter number")
                    alert("the square of " + number +" = " + Math.pow(2,number) )
                    
                
            }break
            case 8: {
                arrayOfNumbers  = [];
                numberValue = prompt("enter the number of values you want to get average of them");
                for(i=0;i<numberValue;i++){
                    arrayOfNumbers[i] = prompt("Enter the " +i+ " element")
                };
                if (arrayOfNumbers != NaN){
                alert("The average is " + average(arrayOfNumbers))}
            }break
            default:
                alert("no input detected")
            
            
        };
})();